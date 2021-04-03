---
inject: true
after: extends
to: apps/<%= code %>/.eslintrc.js
sh: eslint apps/<%= code %>/.eslintrc.js --fix
---
overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*-test.ts', '**/*-test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
