const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#186AFC',
              '@heading-color': '#FFFFFF',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};