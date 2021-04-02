const axios = require('axios');

async function IsRunning({ port }) {
  console.log(`🧐 Checking Packager is running on port ${port}`);
  try {
    const { data } = await axios.get(`http://localhost:${port}/status`);

    if (data === 'packager-status:running') {
      console.log(`👍 Packager already running on port ${port}`);
    } else {
      console.log(`😓 Something else is running on port ${port}!`);
    }

    return true;
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.log(`👉 Packager not running on ${port}`);
      return false;
    }

    console.log(`🥺 Something else errored on port ${port}`);
    return true;
  }
}

module.exports = {
  IsRunning,
};
