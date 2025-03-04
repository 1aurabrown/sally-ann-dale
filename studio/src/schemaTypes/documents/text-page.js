import React from 'react';
import { TextAlignLeft } from "@phosphor-icons/react";

export default {
  title: 'Plain Text Page',
  description: 'Use this page template for legal policy pages.',
  name: 'textPage',
  type: 'document',
  icon: TextAlignLeft,
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'SEO', name: 'seo' }
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
      validation: Rule => Rule.required(),
      description: '(required)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'content'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'complexPortableText',
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
