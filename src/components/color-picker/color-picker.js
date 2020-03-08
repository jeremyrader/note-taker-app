import { LitElement, css, html } from 'lit-element'

class ColorPicker extends LitElement {

  constructor() {
    super()
    this.color = 'black'
  }

  static get properties() {
    return { 
      color: { type: String },
    }
  }

  static get styles() {
    return css`
      .box {
        border: 2px solid black;
      }
    `
  }

  render() {
      return html`
        <div class=".box">
          Color Picker
        </div>
      `
  }
}

customElements.define('color-picker', ColorPicker)