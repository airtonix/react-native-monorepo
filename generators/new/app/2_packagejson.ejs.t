---
sh: |
  cd apps/<%= code %>;
  npx npe name "@airtonix/<%= code %>"
  npx npe scripts.gradle "cd android && gradle"
  npx npe scripts.android "TERM=gnome-terminal react-native run-android"
  npx npe scripts.setup "npx npm-run-all setup:*"
  npx npe scripts."setup:gradle" "yarn gradle wrapper"
---

This step will update the app
