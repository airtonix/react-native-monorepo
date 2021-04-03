const { gather } = require('./gather');

const APPLICATION_ID_PREFIX = 'com.airtonix.';

exports.ApplicationId = async function ApplicationId({ prompter, args }) {
  return ({ code }) =>
    gather([
      {
        type: 'input',
        name: 'package_id',
        initial: `${APPLICATION_ID_PREFIX}${code}`,
      },
    ])({ prompter, args });
};
