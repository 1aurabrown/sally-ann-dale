import { AlignTopSimple } from "@phosphor-icons/react";

export default {
  title: 'Header Settings',
  name: 'headerSettings',
  type: 'document',
  icon: AlignTopSimple,
  fields: [
    {
      title: 'Left Desktop Nav',
      name: 'leftNav',
      type: 'array',
      of: [{ type: 'link' }]
    },
    {
      title: 'Right Desktop Nav',
      name: 'rightNav',
      type: 'array',
      of: [{ type: 'link' }]
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Settings'
      }
    },
  },
}
