import { TextAlignCenter } from "@phosphor-icons/react"

export default {
  title: 'Text Module',
  name: 'textModule',
  type: 'object',
  icon: TextAlignCenter,
  fields: [
    {
      title: 'Body',
      name: 'body',
      type: 'simplePortableText',
      rows: 5,
      validation: Rule => Rule.required(),
    }
  ],
  preview: {
    select: {
      body: 'body'
    },
    prepare({ body }) {
      const block = (body || []).find(block => block._type === 'block')
      return {
        title: 'Text Module',
        subtitle: block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
      }
    }
  }
}
