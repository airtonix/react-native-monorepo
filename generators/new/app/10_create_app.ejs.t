---
sh: |
  # Create app
  cp ./template apps/<%= code %>;

  npx dot-json "./package.json" scripts."apps:<%= code %>" "yarn workspace <%= package_name %>";
---
