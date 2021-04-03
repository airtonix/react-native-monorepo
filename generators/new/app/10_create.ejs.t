---
sh: >-
  yarn react-native init
  --directory apps/<%= code %>
  --title <%= name %>
  --template react-native-template-typescript
  <%= code %>;

  cd apps/<%= code %>;
  npx npe name "@airtonix/<%= code %>";
  npx npe scripts.gradle "cd android && gradle";
  npx npe scripts.android "run-p metro 'native run-android --no-packager'";
  npx npe scripts.ios "run-p metro 'native run-ios --no-packager'";
  npx npe scripts.native "react-native";
  npx npe scripts.metro "yarn native start --port 8081 --verbose";
  npx npe scripts.setup "npx npm-run-all setup:*";
  npx npe scripts."setup:gradle" "yarn gradle wrapper";

  npx rexreplace '../../node_modules' '../../../node_modules' ./android/**/*;
  npx rexreplace '../node_modules' '../../../node_modules' ./ios/**/*;

  rm ./flow*;
  mv ./__tests__/* ./;
  rm -rf ./__tests__;
---

This step will create the app.
