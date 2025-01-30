import { Rectangle } from "@phosphor-icons/react"

export default {
  title: 'Hero Module',
  name: 'heroModule',
  type: 'object',
  icon: Rectangle,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'simplePortableText',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'simplePortableText',
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      image: 'image'
    },
    prepare({ heading, image }) {
      const block = (heading || []).find(block => block._type === 'block')
      return {
        media: image,
        title: 'Hero Module',
        subtitle: block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
      }
    }
  }
}
