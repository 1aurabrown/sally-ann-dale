import { LinkSimpleHorizontal } from "@phosphor-icons/react";

export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  icon: LinkSimpleHorizontal,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text'
    },
    {
      title: 'Link Type',
      name: 'linkType',
      type: 'string',
      initialValue: 'page',
      options: {
        list: [
          { title: 'Page', value: 'page' },
          { title: 'URL', value: 'href' }
        ],
        initialValue: 'page',
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [
        { type: 'homepage' },
        { type: 'online' },
        { type: 'offline' },
        { type: 'textPage' },
      ],
      hidden: ({ parent }) => {
        return parent?.linkType !== 'page'
      },
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'enter an external URL',
      hidden: ({ parent }) => {
        return !(parent?.linkType !== 'page')
      },
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
      pageSlug: 'page.slug.current'
    },
    prepare({ title, url, pageSlug }) {

      return {
        title: title,
        subtitle: url || pageSlug
      }
    }
  }
}
