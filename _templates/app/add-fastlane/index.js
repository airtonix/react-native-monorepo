const { GatherBySelection } = require('../../BasePrompts');

module.exports = {
  prompt: ({ prompter }) => GatherBySelection({ prompter }),
};
