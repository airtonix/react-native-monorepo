---
to: apps/<%= code %>/metro.config.js
force: true
---
const {createConfig} = require('@airtonix/metro-config');

module.exports = createConfig({
  projectRoot: __dirname,
});
