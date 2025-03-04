import { SquareHalf } from "@phosphor-icons/react"

export default {
  title: 'Video Module',
  name: 'videoModule',
  type: 'object',
  icon: SquareHalf,
  fields: [
    {
      title: 'Placeholder Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Video',
      name: 'video',
      type: 'text',
      description: 'Provide a Vimeo embed snippet',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Text',
      name: 'text',
      type: 'simplePortableText'
    }
  ],

  preview: {
    select: {
      image: 'image',
      video: 'video',
      imageAlt: 'image.asset.altText',
      imageTitle: 'image.asset.title',
      videoAlt: 'video.asset.altText',
      videoTitle: 'video.asset.title',
    },
    prepare({ heading, image, video, imageTitle, videoTitle, imageAlt, videoAlt }) {
      const block = (heading || []).find(block => block._type === 'block')
      return {
        media: image,
        title: 'Video Module',
        subtitle: videoTitle || videoAlt || imageTitle || imageAlt
      }
    }
  }
}
