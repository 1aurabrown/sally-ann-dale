import { AlignTopSimple } from "@phosphor-icons/react";

export default {
  title: 'Header Settings',
  name: 'headerSettings',
  type: 'document',
  icon: AlignTopSimple,
  fields: [
    {
      title: 'Header Nav',
      name: 'nav',
      type: 'array',
      of: [{ type: 'link' }]
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Settings'
      }
    }
  }
}
