
const { entryVendor } = require('./constants');

module.exports = {
  use: [
    'neutrino-preset-react',
    entryVendor,
    'neutrino-preset-airbnb',
    'neutrino-preset-styled-jsx',
    'custom-presets/custom-eslint-config',
    'custom-presets/absolute-imports',
    (neutrino)=>{
      neutrino.config.output.publicPath('/');
    },
    ['@neutrinojs/html-template', {
      links: [
        'https://fonts.googleapis.com/css?family=Exo:400,400i,700|Vollkorn:600',
      ]
    }]
  ]
};
