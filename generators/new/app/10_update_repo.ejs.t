---
sh: |
  npx npe scripts.app:<%= code %> "yarn workspace <%= package_name %>"
---

This step injects a convenience command in the root.
