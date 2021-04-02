const execa = require('execa');

function LaunchCommand({ command }) {
  console.log(`🖥 launching: ${command}`);
  return execa.command(command, {
    shell: true,
    stdout: 'inherit',
  });
}

module.exports = {
  LaunchCommand,
};
