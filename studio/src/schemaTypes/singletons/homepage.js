import { Browser } from "@phosphor-icons/react";

export default {
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  icon: Browser,
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'SEO', name: 'seo' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content'
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      hidden: true,
      description: '(required)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'content'
    },
    {
      title: 'Page Modules',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'heroModule' },
        { type: 'videoModule' },
        { type: 'splitTextModule' },
      ],
      group: 'content'
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo'
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)'
      }
    },
  },
}
