import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  studioHost: process.env.SANITY_STUDIO_STUDIO_HOST || '', // Visit https://www.sanity.io/docs/environment-variables to learn more about using environment variables for local & production.
  autoUpdates: true,
})
