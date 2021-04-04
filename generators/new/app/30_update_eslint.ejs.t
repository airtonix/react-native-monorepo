---
inject: true
skip_if: 'overrides'
after: extends
to: apps/<%= code %>/.eslintrc.js
sh: |
  cd apps/<%= code %>;
  yarn eslint --fix;
---
overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*-test.ts', '**/*-test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
