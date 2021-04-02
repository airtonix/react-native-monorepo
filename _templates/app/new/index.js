const { PackageAppCode, PackageName } = require('../../BasePrompts');

module.exports = {
  prompt: ({ prompter }) =>
    PackageName({ prompter }).then(PackageAppCode({ prompter })),
};
