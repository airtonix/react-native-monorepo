---
sh: >-
  yarn react-native init
  --directory apps/<%= code %>
  --title <%= title %>
  --template react-native-template-typescript@<%= reactNativeTemplateVersion || '6.6.3' %>
  <%= code %>;

  cd apps/<%= code %>;
  npx npe name "<%= package_name %>";
  npx npe scripts.android "run-p metro native:android";
  npx npe scripts.ios "run-p metro native:ios";
  npx npe scripts."native:android" "react-native run-android --no-packager";
  npx npe scripts."native:ios" "react-native run-ios --no-packager";
  npx npe scripts.metro "react-native start --port 8081 --verbose";
  npx npe scripts.gradle "cd android && gradle";
  npx npe scripts.setup "run-s setup:*";
  npx npe scripts."setup:gradle" "yarn gradle wrapper";

  npx rexreplace '../node_modules' '../../../node_modules' ./android/settings.gradle;
  npx rexreplace '../node_modules' '../../../node_modules' ./android/build.gradle;
  npx rexreplace '../../node_modules' '../../../../node_modules' ./android/app/build.gradle;
  npx rexreplace '../node_modules' '../../../node_modules' ./ios/**/*;

  rm ./flow*;
  mv ./__tests__/* ./;
  rm -rf ./__tests__;

  npx rexreplace '../App' './App' ./*test.tsx;
---

This step will create the app.
