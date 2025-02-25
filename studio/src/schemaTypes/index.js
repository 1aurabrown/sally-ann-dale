import homepage from './singletons/homepage'
import online from './singletons/online'
import offline from './singletons/offline'
import textPage from './documents/text-page'
import site from './singletons/site'
import headerSettings from './singletons/settings-header'
import footerSettings from './singletons/settings-footer'
import project from './documents/project'

import complexPortableText from './objects/portable-complex'
import simplePortableText from './objects/portable-simple'
import link from './objects/link'
import seo from './objects/seo'

// homepage
import heroModule from './modules/hero-module'
import videoModule from './modules/video-module'
import splitTextModule from './modules/split-text-module'

// Offline
import textModule from './modules/text-module'
// video
import sliderModule from './modules/slider-module'
import listModule from './modules/list-module'

// Then we give our schema to the builder and provide the result to Sanity
export const schemaTypes = [
    site,
    homepage,
    online,
    offline,
    textPage,
    headerSettings,
    footerSettings,
    project,

    seo,
    link,
    complexPortableText,
    simplePortableText,

    heroModule,
    videoModule,
    splitTextModule,

    textModule,
    sliderModule,
    listModule
  ]
