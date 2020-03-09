import { LitElement, css, html } from 'lit-element'
import '../simple-note/simple-note.js'

class NoteList extends LitElement {

  constructor() {
    super()

    this.notes = []
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
    let notes = [...this.notes]
    let index = notes.findIndex((element) => {
      return element.id == id
    })

    notes.splice(index, 1)

    this.dispatchEvent(new CustomEvent('update-notes', {
      detail: {
        notes: notes
      }
    }))
  }

  saveNote(id, updated) {
    let notes = [...this.notes]
    let index = notes.findIndex(element => element.id === id)

    notes[index] = updated

    this.dispatchEvent(new CustomEvent('update-notes', {
      detail: {
        notes: notes,
      }
    }))
  }

  render() {
    const queriedNotes = this.notes.filter(note => note.text.includes(this.query))
    return html`
      <div>
        ${
          this.notes.length > 0 ? queriedNotes.map(note => {
            return html`
              <simple-note id=${note.id} text=${note.text} color=${note.color}
                @delete-click="${(e) => this.deleteNote(note.id)}"
                @save-click="${(e) => this.saveNote(note.id, e.detail)}">
              </simple-note>
            `
          }) : html`<p class="empty">No notes to display</p>`
        }
      </div>
    `
  }
}

customElements.define('note-list', NoteList)