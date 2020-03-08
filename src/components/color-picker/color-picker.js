import { LitElement, css, html } from 'lit-element'
import { styleMap } from 'lit-html/directives/style-map'

class ColorPicker extends LitElement {

  constructor() {
    super()
    this.color = 'blue'
    this.showPicker = false
  }

  static get properties() {
    return { 
      color: { type: String },
      showPicker: { type: Boolean }
    }
  }

  static get styles() {
    return css`
      .box {
        height: 20px;
        width: 20px;
        border: 2px solid black;
        cursor: pointer;
      }
      .option-list {
        z-index: 50;
      }
    `
  }

  handleClick(color) {
    this.color = color
    this.showPicker = false

    this.dispatchEvent(new CustomEvent('choose-color', {
      detail: {
        color: this.color
      }
    }))
  }

  render() {
      let colors = ['green', 'blue', 'orange', 'red', 'purple']
      return html`
        <div class="box" style=${styleMap({ backgroundColor: this.color})} @click=${(e) => this.showPicker = true}></div>
        <div class="option-list">
          ${
            this.showPicker
              ? html`
                  ${
                  colors.map(color => {
                    return html`<div class="box" style=${styleMap({ backgroundColor: color})} @click=${(e) => this.handleClick(color)}></div>`
                  })
                }
                `
              : ''
          }
        </div>
      `
  }
}

customElements.define('color-picker', ColorPicker)