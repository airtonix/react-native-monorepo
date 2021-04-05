const {createConfig} = require('@airtonix/metro-config');

module.exports = createConfig({
  projectRoot: __dirname,
  packageName: require('./package.json').name,
});
