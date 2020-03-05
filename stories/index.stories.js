import { html } from 'lit-html'

import '../components/simple-note.js'

export default {
  title: 'SimpleNote',
}

export const FinalDraft = () => html`
  <simple-note edit=true></simple-note>
`