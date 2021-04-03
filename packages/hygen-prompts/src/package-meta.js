const { gather } = require('./gather');

const PACKAGE_PREFIX = '@airtonix/';

exports.PackageMeta = async function PackageMeta({ prompter, args = {} }) {
  return gather([
    {
      type: 'input',
      name: 'package_name',
      message: "What's the module name",
      initial: `${PACKAGE_PREFIX}${args.code || 'unknown'}`,
    },
  ])({ prompter, args });
};
