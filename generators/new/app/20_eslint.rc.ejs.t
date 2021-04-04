---
inject: true
skip_if: 'overrides'
after: extends
to: apps/<%= code %>/.eslintrc.js
sh: yarn apps:<%= code %> lint --fix
---
overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*-test.ts', '**/*-test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
