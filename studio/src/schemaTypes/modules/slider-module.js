import { Slideshow } from "@phosphor-icons/react"

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
        ]
      }],
      preview: {
        select: {
          heading: 'heading',
          image: 'image'
        },
        prepare({ heading, image }) {
          return {
            media: image,
            title: 'Hero Module',
            subtitle: heading
          }
        }
      }
    },

  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({ items }) {
      return {
        media: items[0].image,
        title: 'Slider Module',
        subtitle: items.map(i => i.heading).join(' / ')
      }
    }
  }
}
