import { LitElement, css, html, unsafeCSS } from 'lit-element'
import { styleMap } from 'lit-html/directives/style-map'

class SimpleNote extends LitElement {

  static get properties() {
    return { 
      edit: { type: Boolean },
      text: { type: String },
      color: { type: String },
      id: { type: String }
    }
  }

  static get styles() {
    return css`
      textarea {
        resize: none;
        outline: none;
        width: 100%;
        min-height: 100px;
        overflow: hidden;
        margin-top: 15px;
      }
      .note { 
        border: 2px solid gray;
        border-radius: 15px;
        width: 250px;
        height: auto;
        padding: 20px;
        margin-bottom: 10px;
      }
      .header {
        display: flex;
        justify-content: flex-end;
        padding: 5px;
      }
      svg {
        cursor: pointer;
        margin-left: 5px;
      }
      svg:hover {
        opacity: 0.5;
      }
      svg:active {
        opacity: 0.75;
      }
      p {
        white-space: pre-wrap;
        overflow-wrap: break-word;
      }
    `
  }

  updated() {
    if (this.text.length === 0) {
      this.edit = true
    }
    if (this.edit) {
      this.resizeText()
    }
  }

  toggleEdit() {
    this.edit = !this.edit
  }

  saveNote() {
    this.toggleEdit()
    this.dispatchEvent(new CustomEvent('save-click', {
      detail: {
        id: this.id,
        note: this.text
      }
    }))
  }

  deleteNote() {
    this.dispatchEvent(new CustomEvent('delete-click', {
      detail: {
        id: this.id
      }
    }))
  }

  handleInputChange(event) {
    this.text = event.target.value
  }

  resizeText() {
    let content = this.shadowRoot.getElementById('content')

    if (content) {
      content.style.height = `1px`
      content.style.height = `${(content.scrollHeight + 25)}px`
    }
  }

  render() {
    return html`
       <div style=${styleMap({ borderColor: this.color})} class="note">
          <div class="header">
            ${
              this.edit
                ? html`
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-save"
                      style=${styleMap({ color: this.color})}
                      @click="${(this.saveNote)}"
                    >
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                      <polyline points="17 21 17 13 7 13 7 21"></polyline>
                      <polyline points="7 3 7 8 15 8"></polyline>
                    </svg>
                  `
                : html`
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-edit"
                      style=${styleMap({ color: this.color})}
                      @click="${this.toggleEdit}"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  `
            }

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-x-circle"
              style=${styleMap({ color: this.color})}
              @click="${this.deleteNote}"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>
          ${
            this.edit
              ? html`
                  <textarea
                    id="content"
                    spellcheck="false"
                    @input=${this.handleInputChange}
                    @blur=${this.saveNote}
                    style=${styleMap({ color: this.color})}
                    placeholder="Your note here..."
                  >${this.text}</textarea>
                `
              : html`<p style=${styleMap({ color: this.color})}>${this.text}</p>`
          }
        </div>
    `   
  }
}

customElements.define('simple-note', SimpleNote)