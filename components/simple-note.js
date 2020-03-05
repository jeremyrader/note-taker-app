import { LitElement, css, html } from 'lit-element'
import * as feather from 'feather-icons'

class SimpleNote extends LitElement {

  constructor() {
    super()
    feather.replace()
  }

  static get properties() {
    return { 
      edit: { type: Boolean }
    }
  }

  static get styles() {
    return css`
      div { color: red; }
    `;
  }

  render() {
    return html`
      <div style="width: 18rem;">
        <div class="card-body">
          <div class="d-flex justify-content-end">
              <img src="images/edit.svg" alt="" width="32" height="32" title="Edit">
              <img src="images/x-circle.svg" alt="" width="32" height="32" title="Close">
              <i data-feather="circle"></i>
          </div>
          ${
            this.edit
                ? html`<textarea>Some quick example text to build on the card title and make up the bulk of the card's content.</textarea>`
                : html`<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`
          }
        </div>
      </div>
    `   
  }
}

customElements.define('simple-note', SimpleNote)