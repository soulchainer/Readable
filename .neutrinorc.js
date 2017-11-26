
const { entryDev, entryVendor } = require('./constants');

module.exports = {
  use: [
    'neutrino-preset-react',
    entryDev,
    entryVendor,
    'neutrino-preset-airbnb',
    'neutrino-preset-styled-jsx',
    'custom-presets/custom-eslint-config',
    'custom-presets/absolute-imports',
    (neutrino)=>{
      neutrino.config.output.publicPath('/');
    }
  ]
};
