import { LitElement, css, html } from 'lit-element'
import { styleMap } from 'lit-html/directives/style-map'

class ColorPicker extends LitElement {

  constructor() {
    super()
    this.color = this.color || 'black'
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
      .picker {
        border: 2px solid black;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 1;
      }
      .selected {
        height: 20px;
        width: 20px;
        cursor: pointer;
      }
      .color {
        height: 20px;
        width: 20px;
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
      let colors = ['black', 'green', 'blue', 'orange', 'red', 'purple']

      let index = colors.findIndex((element) => {
        return element === this.color
      })

      colors.splice(index, 1)

      return html`
        <div class="picker">
          <div class="selected" style=${styleMap({ backgroundColor: this.color})}  @click=${(e) => this.showPicker = !this.showPicker}></div>
          ${
            this.showPicker
              ? html`
                  ${
                  colors.map(color => {
                    return html`<div class="color" style=${styleMap({ backgroundColor: color})} @click=${(e) => this.handleClick(color)}></div>`
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