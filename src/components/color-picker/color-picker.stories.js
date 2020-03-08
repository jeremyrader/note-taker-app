import { html } from 'lit-html'
import { action } from '@storybook/addon-actions'

import './color-picker'

export default {
  title: 'Color Picker',
}

export const ColorPicker = () => html`
  <color-picker></color-picker>
`