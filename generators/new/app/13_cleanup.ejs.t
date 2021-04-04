---
sh: |
  cd apps/<%= code %>;

  rm ./app.json;
  mkdir -p ./app;
  mv ./App.tsx ./app/;
  npx rexreplace '.*app.json.*\n' '' ./index.js;
  npx rexreplace './App' './app/App' ./index.js;
  npx rexreplace 'appName' "'<%= code %>'" ./index.js;

  mv ./__tests__/App-test.tsx ./app/App.test.tsx;
  npx rexreplace '../App' './App' ./app/App.test.tsx;

  rm -rf ./__tests__;
---
