const { IsRunning } = require('./is-running');
const { LaunchPackager } = require('./launch-packager');
const { LaunchCommand } = require('./launch-command');

async function MetroRunnerCommand({ port, cwd, command }) {
  console.log('👋 hiya');
  if (!(await IsRunning({ port }))) {
    LaunchPackager({ port, cwd }).all.on('data', (chunk) => {
      const content = chunk.toString('utf-8');
      console.log(content);
      if (content.includes('Welcome to Metro!')) {
        LaunchCommand({ command });
      }
    });
  } else {
    LaunchCommand({ command });
  }
}

module.exports = { MetroRunnerCommand };
