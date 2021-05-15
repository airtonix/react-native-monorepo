const {
  PickPackagePath,
  options,
  Gatherer,
} = require('@airtonix-react-native/hygen-prompts');

module.exports = {
  prompt: async ({ prompter, args }) => {
    const package = await PickPackagePath({ filter: 'apps/*', prompter, args });
    const questions = [
      {
        name: 'framework',
        message: 'Pick a framework',
        type: 'select',
        choices: [
          {
            message: 'https://wix.github.io/react-native-ui-lib',
            value: 'rnui',
          },
          {
            message: 'https://github.com/galio-org/galio',
            value: 'gailo',
          },
        ],
      },
    ];
    const framework = await Gatherer(questions)({
      prompter,
      args: { ...args, ...package },
    });
    console.log(framework);
    return {
      ...options,
      ...framework,
      ...package,
    };
  },
};
