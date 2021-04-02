const axios = require('axios');

async function IsRunning({ port }) {
  try {
    const { data } = await axios.get(`http://localhost:${port}/status`);

    if (data === 'packager-status:running') {
      console.log(`Packager already running on port ${port}`);
    } else {
      console.log(`Something else is running on port ${port}!`);
    }

    return false;
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return true;
    }

    console.log(`Something else errored on port ${port}`);
    return false;
  }
}

module.exports = {
  IsRunning,
};
