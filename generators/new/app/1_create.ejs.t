---
sh: >-
  yarn react-native init
  --directory apps/<%= code %>
  --title <%= name %>
  --template react-native-template-typescript
  <%= code %>;
  git add .;
  git commit -am "react-native generate app: <%= name %>[<%= code %>]";
---

This step will create the app.
