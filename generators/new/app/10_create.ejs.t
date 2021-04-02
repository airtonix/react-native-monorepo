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
  npx npe scripts.android "TERM=gnome-terminal react-native run-android";
  npx npe scripts.setup "npx npm-run-all setup:*";
  npx npe scripts."setup:gradle" "yarn gradle wrapper";

  npx rexreplace '"(.*)(node_modules)' '€gradle.ext.repoRoot/node_modules' ./android/**/*;

  rm ./flow*;
  mv ./__tests__/* ./;
  rm -rf ./__tests__;
---

This step will create the app.
