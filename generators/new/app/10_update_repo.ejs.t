---
sh: |
  npx npe scripts.apps:<%= code %> "yarn workspace <%= package_name %>"
---

This step injects a convenience command in the root.
