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
        overflow: auto;
        width: 100%;
        height: 80%;
        outline: none;
      }
      .note { 
        border: 2px solid gray;
        border-radius: 15px;
        width: 200px;
        height: 200px;
        padding: 10px;
        text-overflow: ellipsis;
      }
      .header {
        display: flex;
        justify-content: flex-end;
        padding: 5px;
      }
      img {
        cursor: pointer;
      }
    `
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

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.editNote()
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
              ? html`<textarea @input=${this.handleInputChange} @keyup=${this.handleKeyPress} @blur=${this.editNote}>${this.text}</textarea>`
              : html`<p>${this.text}</p>`
          }
        </div>
    `   
  }
}

customElements.define('simple-note', SimpleNote)