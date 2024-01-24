import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-first-stencil-project',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior:'bundle'
    },
    {
      type: 'docs-readme',
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
