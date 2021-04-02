const {
  PackageName,
  PackageMeta,
  ApplicationBundleId,
} = require('@airtonix/hygen-prompts');

module.exports = {
  prompt: async ({ prompter, args }) => {
    const packagename = await PackageName({ prompter, args });
    const packagemeta = await PackageMeta({
      prompter,
      args: { ...args, ...packagename },
    });
    const packagecode = await ApplicationBundleId({
      prompter,
      args: { ...args, ...packagemeta },
    });
    const results = {
      ...packagename,
      ...packagemeta,
      ...packagecode,
    };
    console.log(results);
    return results;
  },
};
