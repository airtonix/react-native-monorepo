const {
  PickPackagePath,
  options,
  Gatherer,
} = require('@airtonix/hygen-prompts');

module.exports = {
  prompt: ({ prompter, args }) => {
    const package = PickPackagePath({ filter: 'apps/*', prompter, args });
    const framework = Gatherer([
      {
        type: 'select',
        choices: [
          {
            name: 'RNUI',
            message: 'https://wix.github.io/react-native-ui-lib',
            value: 'rnui',
          },
          {
            name: 'Gaelio',
            message: 'https://github.com/galio-org/galio',
            value: 'rnui',
          },
        ],
      },
    ])({ prompter, args: { ...args, ...package } });
    return {
      ...options,
      ...framework,
      ...package,
    };
  },
};
