import { SquareHalf } from "@phosphor-icons/react"

export default {
  title: 'List',
  name: 'listModule',
  type: 'object',
  icon: SquareHalf,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Items',
      name: 'items',
      type: 'simplePortableText',
      description: 'Enter each item on a new line.',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Indent Wrapped Text',
      name: 'indent',
      type: 'boolean',
      initialValue: false,
      description: 'When enabled, wrapped list-item text is indented. Otherwise, extra space is added between list-items.',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'link',
      description: 'Use for instance to add a "See More" link',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ image, heading = '' }) {
      return {
        title: 'List Module',
        subtitle: heading,
      }
    }
  }
}
