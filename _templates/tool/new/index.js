const { PackageName, PackageMeta } = require('../../BasePrompts');

module.exports = {
  prompt: async ({ prompter, args }) => {
    const packagename = await PackageName({ prompter, args });
    const packagemeta = await PackageMeta({
      prompter,
      args: { ...args, ...packagename },
    });
    const results = {
      ...packagename,
      ...packagemeta,
    };
    console.log(results);
    return results;
  },
};
