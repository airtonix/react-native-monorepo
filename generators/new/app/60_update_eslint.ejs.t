---
inject: true
skip_if: 'overrides'
after: extends
to: apps/<%= code %>/.eslintrc.js
sh: yarn eslint --fix apps/<%= code %>
---
overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*-test.ts', '**/*-test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
