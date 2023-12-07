import type * as Stackbit from '@stackbit/sdk'

const stackbitConfig: Stackbit.RawConfig = {
  stackbitVersion: '~0.6.0',
  cmsName: 'git',
  ssgName: 'nextjs',
  nodeVersion: '16',
  dataDir: 'content/data',
  pagesDir: 'content/pages',
  models: {
    Page: {
      type: 'page',
      hideContent: true,
      urlPath: '/{slug}',
      fields: [
        {
          type: 'string',
          name: 'title',
          default: 'This is a new page',
          required: true,
        },
      ],
    },
  },
}

export default stackbitConfig