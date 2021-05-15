const {
  PackageJson,
  options,
} = require('@airtonix-react-native/hygen-prompts');

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
