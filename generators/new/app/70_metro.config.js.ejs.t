---
to: apps/<%= code %>/metro.config.js
---
const {createConfig} = require('@airtonix/metro-config');

module.exports = createConfig({
  projectRoot: __dirname,
});
