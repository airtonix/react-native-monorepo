const nconf = require('nconf');
const home = require('user-home');

const key = 'metrorunner';
const pattern = new RegExp(`/^${key.toUpperCase()}__/`);

nconf.env({
  separator: '__',
  match: pattern,
  lowerCase: true,
  parseValues: true,
  transform(obj) {
    obj.key.replace(pattern, '');
    return obj;
  },
});

nconf.argv({
  p: {
    alias: 'port',
  },
  verbose: {
    describe: 'expose a key in the release plan item to the command',
    type: 'boolean',
    default: false,
  },
});

nconf
  .file('user', {
    file: `${home}/.${key}rc`,
    dir: process.cwd(),
    search: true,
  })
  .file('repo', {
    file: `.${key}rc`,
    dir: process.cwd(),
    search: true,
  })
  .defaults({
    verbose: false,
    port: 8081,
  });

module.exports = {
  nconf,
  options,
};
