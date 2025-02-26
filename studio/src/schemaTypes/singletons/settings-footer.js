import { AlignBottomSimple } from "@phosphor-icons/react";

export default {
  title: 'Footer Settings',
  name: 'footerSettings',
  type: 'document',
  icon: AlignBottomSimple,
  fields: [
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Offerings',
      name: 'items',
      type: 'array',
      of: [{
        title: 'Offering',
        name: 'offering',
        type: 'object',
        fields: [
          {
            title: 'Heading',
            name: 'heading',
            type: 'string',
          },
          {
            title: 'Description',
            name: 'description',
            type: 'string',
          }
        ],
        preview: {
          select: {
            heading: 'heading',
            description: 'description'
          },
          prepare({ heading, description }) {
            return {
              title: heading,
              subtitle: description
            }
          }
        }
      }]
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    },
    {
      title: 'Footer Nav',
      name: 'nav',
      type: 'array',
      of: [{ type: 'link' }]
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings'
      }
    }
  }
}
