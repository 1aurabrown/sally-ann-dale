import { TextAlignCenter } from "@phosphor-icons/react"

export default {
  title: 'Split Text Module',
  name: 'splitTextModule',
  type: 'object',
  icon: TextAlignCenter,
  fields: [
    {
      title: 'Left Heading',
      name: 'headingLeft',
      type: 'string',
    },
    {
      title: 'Left Body',
      name: 'bodyLeft',
      type: 'simplePortableText',
      rows: 5
    },
    {
      title: 'Right Heading',
      name: 'headingRight',
      type: 'string',
    },
    {
      title: 'Right Body',
      name: 'bodyRight',
      type: 'simplePortableText',
      rows: 5
    }
  ],
  preview: {
    select: {
      left: 'headingLeft',
      right: 'headingRight'
    },
    prepare({ left, right }) {
      return {
        title: 'Split Text Module',
        subtitle: left + ' / ' + right
      }
    }
  }
}
