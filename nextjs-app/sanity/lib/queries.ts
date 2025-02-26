import { defineQuery } from "next-sanity";

const siteDoc = `*[_id == "site"][0]`
export const homeID = "homepage"
export const errorID = `${siteDoc}.error->_id`
const headerDoc = `*[_id == "headerSettings"][0]`
const footerDoc = `*[_id == "footerSettings"][0]`
const homeDoc = `*[_type == "homepage" && _id ==  "homepage" ][0]`
const onlineDoc = `*[_type == "online" && _id ==  "online" ][0]`
const offlineDoc = `*[_type == "offline" && _id ==  "offline" ][0]`

const seo =`
  ...,
  metaTitle,
  metaDesc,
  shareTitle,
  shareDesc,
  shareGraphic
`

const image = `
  ...,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  "aspectRatio": asset->metadata.dimensions.aspectRatio,`
// Site
export const site=`
  ...,
  title,
  URL,
  gtmID,
  seo{
    ${seo}
  }
`

const linkReference = /* groq */ `
  page->{
    "type": _type,
    "slug": slug.current,
    "isHome": _id==${homeID},
  }
`;

const link = `
  ...,
  ${linkReference}
`;

const footer = `
  logo,
  heading,
  email,
  items,
  nav[]{
    ${link}
  }
`


// Header
export const header=`
  ...,
  nav[]{
    ${link}
  },
  logo
`


// Construct our content "modules" GROQ
export const pageModules = `
  _type == 'splitTextModule' => {
    ...
  },
  _type == 'videoModule' => {
    _key,
    _type,
    image {
      ${image}
    },
    video,
    text
  },
  _type == 'textModule' => {
    ...
  },
  _type == 'listModule' => {
    ...
  },
  _type == 'heroModule' => {
    ...,
    image {
      ${image}
    },
  },
  _type == 'sliderModule' => {
    ...,
    items[] {
      image {
        ${image}
      },
      heading,
      body
    }
  }
`

export const page = `
  ...,
  "isHome": _id==${homeID},
  modules[]{
    ${pageModules}
  }
`
export const project = `
  _type,
  _id,
  slug,
  title,
  year,
  rows[]{
    _key,
    text,
    images[]{
      ${image}
    }
  }
`

const offline = `
  ...,
  projects[]->{
    ${project}
  }
`


// All Singleton Settings
export const settingsQuery = defineQuery(`${siteDoc}{${site}}`);

export const layoutQuery = defineQuery(`{
  "header": ${headerDoc}{
    ${header}
  },
  "footer": ${footerDoc}{
    ${footer}
  }
}`);

export const homeQuery = defineQuery(`${homeDoc}{${page}}`)
export const onlineQuery = defineQuery(`${onlineDoc}{${page}}`)
export const offlineQuery = defineQuery(`${offlineDoc}{${offline}}`)

// below is boilerplate, above is mine


export const allTextPagesQuery = defineQuery(`
  *[_type == "textPage" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    "slug": slug.current
  }
`);

export const getTextPageQuery = defineQuery(`
  *[_type == "textPage" && slug.current == $slug] [0] {
    _id,
    _type,
    title,
    slug,
    body[]{
      ...,
      markDefs[]{
        ...,
        ${linkReference}
      }
    },
    seo{${seo}}
  }
`);

export const textPagesSlugs = defineQuery(`
  *[_type == "textPage" && defined(slug.current)]
  {"slug": slug.current}
`);
