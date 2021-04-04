---
sh: >-
  yarn react-native init
  --directory apps/<%= code %>
  --title <%= title %>
  --template react-native-template-typescript@<%= reactNativeTemplateVersion || '6.6.3' %>
  <%= code %>;

  cd apps/<%= code %>;
  npx dot-json "./package.json" name "<%= package_name %>";
  npx dot-json "./package.json" scripts.android "run-p metro native:android";
  npx dot-json "./package.json" scripts.ios "run-p metro native:ios";
  npx dot-json "./package.json" scripts."native:android" "react-native run-android --no-packager";
  npx dot-json "./package.json" scripts."native:ios" "react-native run-ios --no-packager";
  npx dot-json "./package.json" scripts.metro "react-native start --port 8081 --verbose";
  npx dot-json "./package.json" scripts.gradle "cd android && gradle";
  npx dot-json "./package.json" scripts.setup "run-s setup:*";
  npx dot-json "./package.json" scripts."setup:gradle" "yarn gradle wrapper";
  npx dot-json "./package.json" scripts."types" "tsc";

  # remove unused
  npx dot-json "./package.json" scripts.start --delete

  npx rexreplace '../node_modules' '../../../node_modules' ./android/settings.gradle;
  npx rexreplace '../node_modules' '../../../node_modules' ./android/build.gradle;
  npx rexreplace '../../node_modules' '../../../../node_modules' ./android/app/build.gradle;
  npx rexreplace '../node_modules' '../../../node_modules' ./ios/**/*;

  mkdir -p ./app;
  mv ./App.tsx ./app/;
  npx rexreplace './App' './app/App' ./index.js;

  mv ./__tests__/App-test.tsx ./app/App.test.tsx;
  npx rexreplace '../App' './App' ./app/App.test.tsx;

  rm -rf ./__tests__;
---

This step will create the app.
