const isDev = process.env.NODE_ENV === 'development';

// function to get a «dev» chunk
const entryDev = isDev ? neutrino => neutrino.config.entry('dev').add('react-devtools') : null;

// function to get a «vendor» chunk
const entryVendor = (neutrino) => neutrino.config
  .entry('vendor')
    .add('prop-types')
    .add('react')
    .add('react-dom')
    .add('react-redux')
    .add('react-router')
    .add('react-router-dom')
    .add('redux')
    .add('redux-thunk')
    .add('styled-jsx/style');

module.exports = { entryDev, entryVendor };
