import { LitElement, css, html } from 'lit-element'

class SimpleNote extends LitElement {

  static get properties() {
    return { 
      edit: { type: Boolean },
      text: { type: String }
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
      }
      .note { 
        border: 2px solid gray;
        border-radius: 15px;
        width: 250px;
        height: auto;
        padding: 20px;
      }
      .header {
        display: flex;
        justify-content: flex-end;
        padding: 5px;
      }
      img {
        cursor: pointer;
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

  editNote() {
    this.edit = !this.edit
    if (!this.edit) {
      let event = new CustomEvent('save-note', {
        detail: {
          message: this.text
        }
      });
      this.dispatchEvent(event);
    }
  }

  deleteNote() {
    let event = new CustomEvent('delete-note', {
      detail: {
        message: 'clicked delete note'
      }
    });
    this.dispatchEvent(event);
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
       <div class="note">
          <div class="header">
            <img src="/images/edit.svg" @click="${this.editNote}">
            <img src="/images/x-circle.svg" @click="${this.deleteNote}">  
          </div>
          ${
            this.edit
              ? html`
                  <textarea
                    id="content"
                    @input=${this.handleInputChange}
                    @blur=${this.editNote}
                    placeholder="Your note here..."
                  >${this.text}</textarea>
                `
              : html`<p>${this.text}</p>`
          }
        </div>
    `   
  }
}

customElements.define('simple-note', SimpleNote)