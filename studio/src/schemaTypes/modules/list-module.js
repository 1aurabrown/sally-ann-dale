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
      type: 'text',
      description: 'Enter each item on a new line.',
      validation: Rule => Rule.required(),
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
