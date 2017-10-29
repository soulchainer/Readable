
const { entryVendor } = require('./constants');

module.exports = {
  use: [
    'neutrino-preset-react',
    entryVendor,
    'neutrino-preset-airbnb',
    'neutrino-preset-styled-jsx',
    'custom-presets/custom-eslint-config',
  ]
};
