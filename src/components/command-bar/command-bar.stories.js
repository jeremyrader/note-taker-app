import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'

import './command-bar.js'

export default {
  title: 'CommandBar',
}

export const CommandBar = () => html`
  <command-bar
    @create-click="${action('create')}"
    @search-input="${action('search')}"
  ></command-bar>
`