module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*-test.ts', '**/*-test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
