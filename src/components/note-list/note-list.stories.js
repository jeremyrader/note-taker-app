import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'

import './note-list.js'

export default {
  title: 'Note List',
}

const savedNotes = [
  { id: 'ace2eb3a-6102-11ea-bc55-0242ac130003', text: 'Note 1', color: 'blue'},
  { id: 'c259a51c-6102-11ea-bc55-0242ac130003', text: 'Note 2', color: 'blue' },
  { id: 'cc01baaa-6102-11ea-bc55-0242ac130003', text: 'Note 3', color: 'green' }
]

window.localStorage.setItem('notes', JSON.stringify([]))

export const SavedNotes = () => html`
  <note-list
    notes=${JSON.stringify(savedNotes)}
    @update-notes="${action('update')}"
  ></note-list>
`

export const EmptyNoteList = () => html`
  <note-list @update-notes="${action('update')}"></note-list>
`

const wrappedNotes = [
  { id: 'ace2eb3a-6102-11ea-bc55-0242ac130001', text: 'Note 1', color: 'blue'},
  { id: 'c259a51c-6102-11ea-bc55-0242ac130002', text: 'Note 2', color: 'orange' },
  { id: 'cc01baaa-6102-11ea-bc55-0242ac130003', text: 'Note 3', color: 'green' },
  { id: 'ace2eb3a-6102-11ea-bc55-0242ac130004', text: 'Note 4', color: 'blue'},
  { id: 'c259a51c-6102-11ea-bc55-0242ac130005', text: 'Note 5', color: 'red' },
  { id: 'cc01baaa-6102-11ea-bc55-0242ac130006', text: 'Note 6', color: 'green' },
  { id: 'ace2eb3a-6102-11ea-bc55-0242ac130007', text: 'Note 7', color: 'purple'},
  { id: 'c259a51c-6102-11ea-bc55-0242ac130008', text: 'Note 8', color: 'blue' },
  { id: 'cc01baaa-6102-11ea-bc55-0242ac130009', text: 'Note 9', color: 'teal' },
  { id: 'cc01baaa-6102-11ea-bc55-0242ac130000', text: 'Note 10', color: 'brown' }
]

export const WrappedNoteList = () => html`
  <note-list 
    notes=${JSON.stringify(wrappedNotes)}
    @update-notes="${action('update')}"
  ></note-list>
`