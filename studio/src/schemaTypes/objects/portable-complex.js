// import '../../branding/skin.css?raw'

import {
  Header1,
  Header2,
  Header3,
  Header4
} from '../../components/block-renders'

export default {
  title: 'Rich Text',
  name: 'complexPortableText',
  type: 'array',
  of: [
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Block',
      type: 'block',
      styles: [
        {
          title: 'Heading 2',
          value: 'h2',
          blockEditor: {
            render: Header2
          }
        },
        {
          title: 'Heading 3',
          value: 'h3',
          blockEditor: {
            render: Header3
          }
        },
        {
          title: 'Heading 4',
          value: 'h4',
          blockEditor: {
            render: Header4
          }
        },
        {title: 'Paragraph', value: 'normal'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'link',
          }
        ]
      }
    }
  ]
}
