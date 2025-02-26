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
      validation: Rule => Rule.required(),
    },
    {
      title: 'Left Body',
      name: 'bodyLeft',
      type: 'simplePortableText',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Right Heading',
      name: 'headingRight',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Right Body',
      name: 'bodyRight',
      type: 'simplePortableText',
      validation: Rule => Rule.required(),
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
