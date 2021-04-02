const { IsRunning } = require('./is-running');
const { LaunchPackager } = require('./launch-packager');

async function MetroRunnerCommand({ port }) {
  if (await IsRunning({ port })) return;
  await LaunchPackager({ port });
}

module.exports = { MetroRunnerCommand };
