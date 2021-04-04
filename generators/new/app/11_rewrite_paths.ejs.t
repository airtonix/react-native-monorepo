---
sh: |
  cd apps/<%= code %>;

  npx rexreplace '../node_modules' '../../../node_modules' ./android/settings.gradle;
  npx rexreplace '../node_modules' '../../../node_modules' ./android/build.gradle;
  npx rexreplace '../../node_modules' '../../../../node_modules' ./android/app/build.gradle;
  npx rexreplace '../node_modules' '../../../node_modules' ./ios/**/*;
---
