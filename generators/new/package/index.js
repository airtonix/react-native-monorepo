const { PackageJson, options } = require('@airtonix/hygen-prompts');

module.exports = {
  prompt: async ({ prompter, args }) => {
    const package = await PackageJson({ prompter, args });
    const results = {
      ...options,
      ...package,
    };
    console.log(results);
    return results;
  },
};
