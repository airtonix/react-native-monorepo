const path = require('path');
const fs = require('fs'); // Or `import fs from "fs";` with ESM

// const { FileStore } = require('metro-cache');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const { getPackagesSync } = require('@manypkg/get-packages');

const { root, packages } = getPackagesSync(process.cwd());

exports.createConfig = ({ projectRoot }) => {
  const absoluteProjectRoot = path.resolve(projectRoot, '.');
  const { name } = require(`${absoluteProjectRoot}/package.json`);

  const workspacesWithNodeModules = packages.filter(({ dir }) =>
    fs.existsSync(path.join(dir, 'node_modules'))
  );

  const blacklistRE = workspacesWithNodeModules
    .filter(({ packageJson }) => packageJson.name !== name)
    .map(
      ({ dir }) =>
        new RegExp(
          `^${escape(path.resolve(projectRoot, dir, 'node_modules'))}\\/.*$`
        )
    );
  const watchFolders = [
    path.join(root.dir, 'node_modules'),
    ...workspacesWithNodeModules.map(({ dir }) =>
      path.join(dir, 'node_modules')
    ),
  ];
  console.log({
    name,
    absoluteProjectRoot,
    blacklistRE,
    watchFolders,
  });

  return {
    projectRoot: absoluteProjectRoot,
    watchFolders,
    resolver: {
      blacklistRE: exclusionList(blacklistRE),
      // https://github.com/facebook/metro/issues/1#issuecomment-453450709
      extraNodeModules: new Proxy(
        {},
        {
          get: (target, name) => {
            const result = path.join(root.dir, 'node_modules', name);
            // console.log(`resolver > ${name} = ${result}`);
            return result;
          },
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

    // cacheStores: [
    //   new FileStore({
    //     root: path.join(projectRoot, 'metro-cache'),
    //   }),
    // ],
  };
};
