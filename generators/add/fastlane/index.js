const { PickPackagePath } = require('@airtonix/hygen-prompts');

module.exports = {
  prompt: ({ prompter }) => PickPackagePath({ filter: 'apps/*', prompter }),
};
