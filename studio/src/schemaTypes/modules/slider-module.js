import { Slideshow, Image } from "@phosphor-icons/react"

export default {
  title: 'Slider',
  name: 'sliderModule',
  type: 'object',
  icon: Slideshow,
  fields: [
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{
        title: 'SliderItem',
        name: 'sliderItem',
        type: 'object',
        icon: Image,
        fields: [
          {
            title: 'Image',
            name: 'image',
            type: 'image',
            validation: Rule => Rule.required(),
          },
          {
            title: 'Heading',
            name: 'heading',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            title: 'Body',
            name: 'body',
            type: 'simplePortableText',
            validation: Rule => Rule.required(),
          },
        ],
        preview: {
          select: {
            title: 'heading',
            body: 'body',
            image: 'image'
          },

          prepare({ image, title, body }) {
            const block = (body || []).find(block => block._type === 'block')
            return {
              media: image,
              title: title,
              subtitle: block.children
                .filter(child => child._type === 'span')
                .map(span => span.text)
                .join('')
            }
          }
        }
      }]
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({ items }) {
      return {
        media: items[0].image || Slideshow,
        title: 'Slider Module',
        subtitle: items.map(i => i.heading).join(' / ')
      }
    }
  }
}
