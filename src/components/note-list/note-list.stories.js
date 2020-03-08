import { html } from 'lit-html'
import './note-list.js'

export default {
  title: 'Note List',
}

let notes = [
  { id: 'ace2eb3a-6102-11ea-bc55-0242ac130003', text: 'Note 1', color: 'blue'},
  { id: 'c259a51c-6102-11ea-bc55-0242ac130003', text: 'Note 2', color: 'blue' },
  { id: 'cc01baaa-6102-11ea-bc55-0242ac130003', text: 'Note 3', color: 'green' }
]

window.localStorage.setItem('notes', JSON.stringify([]))

export const SavedNotes = () => html`
  <note-list notes=${JSON.stringify(notes)}></note-list>
`

export const EmptyNoteList = () => html`
  <note-list></note-list>
`