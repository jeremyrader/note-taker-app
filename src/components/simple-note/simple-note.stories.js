import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'
import { withKnobs, color } from '@storybook/addon-knobs'

import './simple-note.js'

export default {
  title: 'SimpleNote',
  decorators: [withKnobs]
}

let note = `This is some filler text to see what it looks like when the note component has text in it`

export const NoteWithShortText = () => html`
  <simple-note
    text=${note}
    @delete-click="${action('delete')}"
    @save-click="${action('save')}"
    ></simple-note>
`

let longNote = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

export const NoteWithLongText = () => html`
  <simple-note
    text=${longNote}
    @delete-click="${action('delete')}"
    @save-click="${action('save')}"
  ></simple-note>
`

export const EmptyNote = () => html`
  <simple-note
    text=""
    @delete-click="${action('delete')}"
    @save-click="${action('save')}"
  ></simple-note>
`

export const NoteWithColor = () => html`
  <simple-note
    text=${note}
    color=${color('Color', 'blue', 'GROUP-ID1')}
    @delete-click="${action('delete')}"
    @save-click="${action('save')}"
  ></simple-note>
`