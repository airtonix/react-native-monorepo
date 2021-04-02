const { GatherBySelection } = require('@airtonix/hygen-prompts');

module.exports = {
  prompt: ({ prompter }) => GatherBySelection({ prompter }),
};
