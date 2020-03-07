import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'

import '../web-components/simple-note.js'

export default {
  title: 'SimpleNote',
}

let note = `
  This is some filler text to see what it looks like when the note component has text in it
`

export const NoteWithShortText = () => html`
  <simple-note
    text=${note}
    @delete-note="${action('delete')}"
    @save-note="${action('save')}"
    ></simple-note>
`

let longNote = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

export const NoteWithLongText = () => html`
  <simple-note
    text=${longNote}
    @delete-note="${action('delete')}"
    @save-note="${action('save')}"
    ></simple-note>
`