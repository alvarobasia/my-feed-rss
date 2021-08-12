import { convertFromRaw, convertToRaw, EditorState, RawDraftContentState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'

export function useDraft() {
  function saveDraft(editorState: EditorState) {
    return convertToRaw(editorState.getCurrentContent())
  }

  function getDraft(rawState: RawDraftContentState) {
    return EditorState.createWithContent(convertFromRaw(rawState))
  }

  function convertToHTML(editorState: EditorState) {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()), undefined, false)
  }

  return { saveDraft, getDraft, convertToHTML }
}
