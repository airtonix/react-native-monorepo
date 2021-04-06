const path = require('path');
const fs = require('fs');

const { FileStore } = require('metro-cache');
const { getPackagesSync } = require('@manypkg/get-packages');

const { root, packages } = getPackagesSync(process.cwd());

exports.createConfig = ({ projectRoot, packageName }) => {
  const absoluteProjectRoot = path.resolve(projectRoot, '.');

  const workspacePackages = packages.reduce(
    (result, { dir, packageJson: { name } }) => {
      return {
        ...result,
        [name]: dir,
      };
    },
    {}
  );
  const watchFolders = [
    path.join(root.dir, 'node_modules'),
    path.join(projectRoot, 'node_modules'),
    ...Object.values(workspacePackages),
  ];

  console.log({
    packageName,
    absoluteProjectRoot,
    workspacePackages,
    watchFolders,
  });

  return {
    projectRoot: absoluteProjectRoot,
    watchFolders,
    resolver: {
      // blacklistRE: exclusionList(blacklistRE),
      // https://github.com/facebook/metro/issues/1#issuecomment-453450709
      extraNodeModules: new Proxy(workspacePackages, {
        get: (target, name) => {
          if (target.hasOwnProperty(name)) {
            return target[name];
          }
          const result = watchFolders.find((modules) => {
            const modulePath = path.join(modules, name);
            return fs.existsSync(modulePath)
              ? fs.realpathSync(modulePath)
              : undefined;
          });
          target[name] = result;
          return result;
        },
      }),
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
  };
};
