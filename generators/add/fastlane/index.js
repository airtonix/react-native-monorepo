const { PickPackagePath } = require('@airtonix/hygen-prompts');

module.exports = {
  prompt: ({ prompter, args }) =>
    PickPackagePath({ filter: 'apps/*', prompter, args }),
};
