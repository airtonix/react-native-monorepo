const lodash = require('lodash');

const { gather } = require('./gather');

exports.PackageName = async function PackageName({ prompter, args = {} }) {
  return gather([
    {
      type: 'input',
      name: 'name',
      message: "What's the package name",
      questions: ({ name }) => [
        {
          type: 'input',
          name: 'code',
          initial: lodash.kebabCase(name),
        },
      ],
    },
  ])({ prompter, args });
};
