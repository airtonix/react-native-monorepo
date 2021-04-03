const { PackageJson, Gatherer, options } = require('@airtonix/hygen-prompts');

module.exports = {
  prompt: async ({ prompter, args }) => {
    const package = await PackageJson({ prompter, args });
    const generator = await Gatherer([
      {
        type: 'select',
        name: 'type',
        choices: ['add', 'new'],
      },
    ])({
      prompter,
      args: { ...args, ...package },
    });

    const results = {
      ...options,
      ...package,
      ...generator,
    };
    console.log(results);
    return results;
  },
};
