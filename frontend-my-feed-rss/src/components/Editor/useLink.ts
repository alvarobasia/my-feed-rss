import { EditorState, RichUtils } from 'draft-js'

export function useLink() {
  function saveLink(e: any, link: string, editorState: any) {
    e.preventDefault()
    const contentState = editorState.getCurrentContent()

    const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {
      url: link
    })
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()

    // Apply entity
    let nextEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    })

    // Apply selection
    nextEditorState = RichUtils.toggleLink(
      nextEditorState,
      nextEditorState.getSelection(),
      entityKey
    )
    return nextEditorState
  }

  function removeLink(e: any, editorState: any) {
    e.preventDefault()
    const selection = editorState.getSelection()
    return RichUtils.toggleLink(editorState, selection, null)
  }

  return { saveLink, removeLink }
}
