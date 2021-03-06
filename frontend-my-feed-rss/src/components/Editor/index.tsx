import { Editor, EditorState, RichUtils, CompositeDecorator } from 'draft-js'
import { useRouter } from 'next/router'

import React, { useState } from 'react'
import { EditorButton } from './EditorButton'
import Select from './Select'

import {
  EditorStyle,
  Container,
  IconUnderLine,
  IconBold,
  IconItalic,
  ConfigContainer,
  Strike,
  Code,
  LinkButton,
  OrderList,
  UnorderedList,
  SelectInput,
  EditorButtonStyle,
  Remove,
  ButtonAction
} from './styles'
import { useDraft } from './useDraft'
import { useLink } from './useLink'

function findLinkEntities(contentBlock: any, callback: any, contentState: any) {
  contentBlock.findEntityRanges((character: any) => {
    const entityKey = character.getEntity()
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK'
  }, callback)
}
const Link = (props: any) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData()
  return (
    <a
      contentEditable={false}
      title={url}
      target="_black"
      href={url}
      style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }}
    >
      {props.children}
    </a>
  )
}

type EditorAppProps = {
  onSavePub: (content: string) => void
}

export default function EditorApp({ onSavePub }: EditorAppProps) {
  const [link, setLink] = useState('')
  const [editorState, setEditorState] = useState(() => {
    const decorator = new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link
      }
    ])
    return EditorState.createEmpty(decorator)
  })
  const { push } = useRouter()
  const { removeLink, saveLink } = useLink()
  const { convertToHTML } = useDraft()
  function handleCommandInline(command: string) {
    setEditorState(RichUtils.toggleInlineStyle(editorState, command))
  }

  function handleSaveDraft() {
    const content = convertToHTML(editorState)
    console.log(content)

    onSavePub(content)
  }

  function handleBack() {
    push('/yourpubs')
  }
  function handleCommandBlock(command: string) {
    setEditorState(RichUtils.toggleBlockType(editorState, command))
  }

  function addLink(e: any) {
    setEditorState(saveLink(e, link, editorState))
  }

  function rLink(e: any) {
    setEditorState(removeLink(e, editorState))
  }
  return (
    <Container>
      <ConfigContainer>
        <Select onChange={handleCommandBlock} />
        <EditorButton
          command="UNDERLINE"
          Icon={(<IconUnderLine />) as any}
          callback={handleCommandInline}
        />
        <EditorButton
          command="BOLD"
          Icon={(<IconBold />) as any}
          callback={handleCommandInline}
        />
        <EditorButton
          command="ITALIC"
          Icon={(<IconItalic />) as any}
          callback={handleCommandInline}
        />
        <EditorButton
          command="STRIKETHROUGH"
          Icon={(<Strike />) as any}
          callback={handleCommandInline}
        />
        <EditorButton
          command="CODE"
          Icon={(<Code />) as any}
          callback={handleCommandInline}
        />

        <EditorButton
          command="ordered-list-item"
          Icon={(<OrderList />) as any}
          callback={handleCommandBlock}
        />
        <EditorButton
          command="unordered-list-item"
          Icon={(<UnorderedList />) as any}
          callback={handleCommandBlock}
        />
        <EditorButtonStyle disabled={link.length === 0} onClick={addLink}>
          <LinkButton />
        </EditorButtonStyle>
        <EditorButtonStyle disabled={link.length === 0} onClick={rLink}>
          <Remove />
        </EditorButtonStyle>
        <SelectInput
          placeholder="Adicione um link"
          onChange={(e) => setLink(e.target.value)}
          value={link}
        />
        <ButtonAction buttonType="save" onClick={handleSaveDraft}>
          Salvar
        </ButtonAction>
        <ButtonAction buttonType="" onClick={handleBack}>
          Discartar
        </ButtonAction>
      </ConfigContainer>

      <EditorStyle>
        <Editor editorState={editorState} onChange={setEditorState} />
      </EditorStyle>
    </Container>
  )
}
