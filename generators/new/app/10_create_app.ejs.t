---
sh: |
  # Create app
  yarn react-native init \
  --directory apps/<%= code %> \
  --title <%= title %> \
  --template packages/react-native-template-typescript \
  <%= id %>;

  npx dot-json "./package.json" scripts."apps:<%= code %>" "yarn workspace <%= package_name %>";
---
