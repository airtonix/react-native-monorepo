const path = require('path');

const { FileStore } = require('metro-cache');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const { getPackagesSync } = require('@manypkg/get-packages');

const { name } = require('./package.json');
const { root, packages } = getPackagesSync(process.cwd());

exports.createConfig = ({ projectRoot }) => ({
  projectRoot: path.resolve(projectRoot, '.'),

  watchFolders: [
    path.join(root.dir, 'node_modules'),
    ...packages.map(({ dir }) => dir),
  ],

  resolver: {
    blacklistRE: exclusionList(
      packages
        .filter(({ packageJson }) => packageJson.name !== name)
        .map(
          ({ dir }) =>
            new RegExp(
              `^${escape(path.resolve(projectRoot, dir, 'node_modules'))}\\/.*$`
            )
        )
    ),
    // https://github.com/facebook/metro/issues/1#issuecomment-453450709
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
      }
    ),
  },

  // http://facebook.github.io/react-native/blog/2019/03/12/releasing-react-native-059#faster-app-launches-with-inline-requires
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },

  cacheStores: [
    new FileStore({
      root: path.join(projectRoot, 'metro-cache'),
    }),
  ],
});
