import { LitElement, css, html } from 'lit-element'
import '../simple-note/simple-note.js'

class NoteList extends LitElement {

  constructor() {
    super()

    let notes = window.localStorage.getItem('notes')
    this.notes = notes ? JSON.parse(notes) : []

    this.query = ''
  }

  static get properties() {
    return {
      notes: { type: Array },
      query: { type: String }
    }
  }

  static get styles() {
    return css`
      div {
        display: flex;
        padding: 20px;
        flex-wrap: wrap;
      }
      simple-note {
        margin-right: 10px;
      }
      .empty {
        text-align: center;
      }
    `
  }

  deleteNote(id) {
    let index = this.notes.findIndex((element) => {
      return element.id == id
    })

    this.notes.splice(index, 1)
    this.notes = [...this.notes]
  }

  saveNote(id, updated) {
    this.notes.find((element) => {
      if (element.id == id) {
        element.text = updated
      }
    })

    window.localStorage.setItem('notes', JSON.stringify(this.notes))
  }

  render() {

    const queriedNotes = this.notes.filter(note => note.text.includes(this.query))

    return html`
      <div>
        ${
          this.notes.length > 0 ? queriedNotes.map(note => {
            return html`
              <simple-note text=${note.text} color=${note.color}
                @delete-click="${(e) => this.deleteNote(note.id)}"
                @save-click="${(e) => this.saveNote(note.id, e.detail.note)}">
              </simple-note>
            `
          }) : html`<p class="empty">No notes to display</p>`
        }
      </div>
    `
  }
}

customElements.define('note-list', NoteList)