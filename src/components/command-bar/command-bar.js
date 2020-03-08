import { LitElement, css, html } from 'lit-element'

class CommandBar extends LitElement {

  constructor() {
    super()
    this.debouncer = this.debounce(() => {
      this.dispatchEvent(new CustomEvent('search-input', {
        detail : {
          query: this.query
        }
      }))
    }, 250)
  }

  static get properties() {
    return { 
      query: { type: String },
    }
  }

  static get styles() {
    return css`
      div {
        border: 2px solid black;
        border-radius: 15px;
        display: flex;
        padding: 20px;
        width: 400px;
      }
      button {
        margin-right: 20px;
        border: 2px solid black;
        background-color: white;
        padding: 10px;
        border-radius: 25px;
        cursor:pointer;
        outline:none;
      }
      button > span:hover: {
        opacity: 0.5
      }
      button:active: {
        background-color: gray;
        opacity: 0.75
      }
      input {
        outline: none;
      }
      span {
        display: flex;
        align-items: center;
      }
    `
  }

  createNote() {
    this.dispatchEvent(new CustomEvent('create-click'))
  }

  //From underscore.js
  debounce(func, wait, immediate) {
    var timeout;
      return function() {
        var context = this, args = arguments
        var later = function() {
          timeout = null
          if (!immediate) func.apply(context, args)
        };
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
  }

  handleInputChange(event) {
    this.query = event.target.value
    this.debouncer()
  }

  render() {
      return html`
        <div>
          <button @click=${this.createNote}>
            <span>
              <b>Create Note</b>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            <span>
          </button>
          <input type="text" placeholder="Search" @input=${this.handleInputChange} />
        </div>
      `
  }
}

customElements.define('command-bar', CommandBar)