module.exports = neutrino => {
  neutrino.config.module
    .rule('lint')
    .use('eslint')
    .tap(options => Object.assign(options, {
      envs: ['browser', 'es6', 'node'],
      rules: Object.assign(options.rules, {
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
      }),
      settings: {'import/core-modules': ['styled-jsx/css'] }
    }));
};
