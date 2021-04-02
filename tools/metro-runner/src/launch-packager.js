const execa = require('execa');

async function LaunchPackager({ port }) {
  return execa('npx', ['react-native', 'start'`--port ${port}`, '--verbose']);
}

module.exports = {
  LaunchPackager,
};
