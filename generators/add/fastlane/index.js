const { PickPackagePath } = require('@airtonix-react-native/hygen-prompts');

module.exports = {
  prompt: ({ prompter, args }) =>
    PickPackagePath({ filter: 'apps/*', prompter, args }),
};
