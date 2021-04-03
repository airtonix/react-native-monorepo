---
sh: >-
  yarn react-native init
  --directory apps/<%= code %>
  --title <%= title %>
  --template react-native-template-typescript@<%= reactNativeTemplateVersion || '6.6.3' %>
  <%= code %>;

  cd apps/<%= code %>;
  npx npe name "<%= package_name %>";
  npx npe scripts.gradle "cd android && gradle";
  npx npe scripts.android "run-p metro 'native run-android --no-packager'";
  npx npe scripts.ios "run-p metro 'native run-ios --no-packager'";
  npx npe scripts.native "react-native";
  npx npe scripts.metro "yarn native start --port 8081 --verbose";
  npx npe scripts.setup "npx npm-run-all setup:*";
  npx npe scripts."setup:gradle" "yarn gradle wrapper";

  npx rexreplace --literal '../node_modules' '../../../node_modules' ./android/settings.gradle;
  npx rexreplace --literal '../../../node_modules' '../../../../../node_modules' ./android/build.gradle;
  npx rexreplace --literal '../node_modules' '../../../node_modules' ./android/app/build.gradle;
  npx rexreplace --literal '../node_modules' '../../../node_modules' ./ios/**/*;

  rm ./flow*;
  mv ./__tests__/* ./;
  rm -rf ./__tests__;

  npx rexreplace --literal '../App' './App' ./*test.tsx;
---

This step will create the app.
