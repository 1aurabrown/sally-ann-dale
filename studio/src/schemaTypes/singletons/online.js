import { Browser } from "@phosphor-icons/react";

export default {
  title: 'Online',
  name: 'online',
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
        { type: 'textModule' },
        { type: 'videoModule' },
        { type: 'sliderModule' },
        { type: 'listModule' },
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
