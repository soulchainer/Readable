module.exports = neutrino => {
  neutrino.config.module
    .rule('lint')
    .use('eslint')
    .tap(options => Object.assign(options, {
      envs: ['browser', 'es6', 'node'],
      rules: Object.assign(options.rules, {
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'import/no-extraneous-dependencies': 'off',
        // Don't require file extensions on imports
        'import/extensions': 'off',
        // Don't mark as unresolved without extensions
        'import/no-unresolved': 'off',
        'jsx-a11y/label-has-for': ['error', {
          "components": ['label'],
          "required": {
            "some": [ "nesting", "id" ]
          },
        }],
        // Consider «to» attribute of <Link> as its «href»
        "jsx-a11y/anchor-is-valid": [ "error", {
          "components": [ "Link" ],
          "specialLink": [ "to", "hrefLeft", "hrefRight" ],
          "aspects": [ "noHref", "invalidHref", "preferButton" ]
        }],
      }),
      settings: {'import/core-modules': ['styled-jsx/css'] }
    }));
};
