import React from 'react'
import { GlobeHemisphereWest } from "@phosphor-icons/react"

export default {
  title: 'Site Settings',
  name: 'settings',
  type: 'document',
  icon: GlobeHemisphereWest,
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'SEO', name: 'seo' },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'The name of your site, usually your company/brand name',
      group: 'content'
    },
    {
      title: 'Live URL',
      description: 'The root domain or subdomain of your website',
      name: 'URL',
      type: 'url',
      group: 'content'
    },
    {
      title: 'Google Tag Manager (GTM)',
      description: 'To enable GTM enter your Container ID',
      name: 'gtmID',
      type: 'string',
      group: 'content'
    },
    {
      title: 'Default SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo'
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site'
      }
    }
  }
}
