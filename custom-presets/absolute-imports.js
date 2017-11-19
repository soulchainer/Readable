const path = require('path');

module.exports = neutrino => {
  neutrino.config.resolve.modules.add(neutrino.options.source)
};
