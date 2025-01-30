import { Shuffle } from "@phosphor-icons/react"

export default {
  title: 'Redirect',
  name: 'redirect',
  type: 'document',
  icon: Shuffle,
  fields: [
    {
      title: 'From (slug)',
      name: 'from',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Do not include the full domain or leading slash.'
    },
    {
      title: 'To (slug)',
      name: 'to',
      type: 'string',
      description: 'Do not include the full domain or leading slash. Leave blank to refer to the homepage.'
    },
    {
      title: 'Is this a permanent redirect (301)?',
      name: 'isPermanent',
      type: 'boolean'
    }
  ],
  initialValue: {
    isPermanent: true
  },
  preview: {
    select: {
      to: 'to',
      from: 'from',
      isPermanent: 'isPermanent'
    },
    prepare({ from, to, isPermanent }) {
      return {
        title: from && to ? `/${from} → /${to}` : 'New Redirect',
        subtitle: isPermanent ? '301' : '302'
      }
    }
  }
}
