const {
  PackageJson,
  ApplicationId,
  options,
} = require('@airtonix/hygen-prompts');

module.exports = {
  prompt: async ({ prompter, args }) => {
    const package = await PackageJson({ prompter, args });
    const application = await ApplicationId({
      prompter,
      args: { ...args, ...package },
    });
    const results = {
      ...options,
      ...package,
      ...application,
    };
    return results;
  },
};
