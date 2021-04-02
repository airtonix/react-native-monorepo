---
sh: >-
  yarn react-native init
  --directory apps/<%= code %>
  --title <%= name %>
  --template react-native-template-typescript
  <%= code %>;
---

This step will create the app.
