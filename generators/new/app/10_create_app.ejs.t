---
sh: |
  # Create app
  yarn react-native init \
  --directory apps/<%= code %> \
  --title <%= title %> \
  --template react-native-template-typescript@<%= reactNativeTemplateVersion || '6.6.3' %> \
  <%= id %>;

  npx dot-json "./package.json" scripts."apps:<%= code %>" "yarn workspace <%= package_name %>";
---
