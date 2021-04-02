const execa = require('execa');

function LaunchPackager({ port, cwd }) {
  console.log(`🚀 launching metro bundler on ${port}`);
  return execa('npx', ['react-native', 'start', `--port`, port, '--verbose'], {
    cwd,
    all: true,
    buffer: false,
  });
}

module.exports = {
  LaunchPackager,
};
