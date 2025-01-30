import { PaintBrush } from "@phosphor-icons/react"

export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  icon: PaintBrush,
  fields: [
  	{
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Content Rows',
      name: 'rows',
      type: 'array',
      of: [{
        title: 'Row',
        name: 'row',
        type: 'object',
        fields: [
        	{
			      title: 'Images',
			      name: 'images',
			      type: 'array',
			      of: [
              {
  			        title: 'Image',
  			        name: 'image',
  			        type: 'image',
  			        max: 2,
  			      },
            ],
            validation: Rule => Rule.required(),
          },
          {
            title: 'Text',
            name: 'text',
            type: 'simplePortableText',
            validation: Rule => Rule.required(),
          },
        ],
        preview: {
        select: {
          text: 'text',
          images: 'images'
        },
        prepare({ text, images }) {
          const block = (text || []).find(block => block._type === 'block')
          return {
            media: images[0],
            title: 'Slider Module',
            subtitle: block.children
                .filter(child => child._type === 'span')
                .map(span => span.text)
                .join('')
          }
        }
      }
      }],
    },

  ],
  preview: {
    select: {
      rows: 'rows',
      title: 'title',
    },
    prepare({ title, rows }) {
      return {
        media: rows[0].images[0],
        title: 'Project',
        subtitle: title,
      }
    }
  }
}
