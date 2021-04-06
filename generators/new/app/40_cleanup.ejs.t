---
sh: |
  # Cleanup
  set -o errexit; # Exit on most errors
  set -o nounset; # Disallow expansion of unset variables
  set -o pipefail; # Use last non-zero exit code in a pipeline

  cd apps/<%= code %>;

  rm ./app.json;
  mkdir -p ./app;
  mv ./App.tsx ./app/;

  yarn replace-in-files \
    --regex '.*app.json.*\n' \
    --replacement '' \
    ./index.js;

  yarn replace-in-files \
    --string 'appName' \
    --replacement '("<%= id %>")' \
    ./index.js;

  yarn replace-in-files \
    --string './App' \
    --replacement './app/App' \
    ./index.js;

  mv ./__tests__/App-test.tsx ./app/App.test.tsx;

  yarn replace-in-files \
    --string '../App' \
    --replacement "./App" \
    ./app/App.test.tsx;

  rm -rf ./__tests__;
---
