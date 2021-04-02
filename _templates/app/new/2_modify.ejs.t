---
sh: |
  cd apps/<%= code %>;
  npx npe name "@airtonix/<%= code %>"
  npx npe scripts.gradle "cd android && gradle"
  yarn gradle wrapper
---

This step will update the app
