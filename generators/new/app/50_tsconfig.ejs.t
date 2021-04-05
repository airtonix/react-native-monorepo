---
to: apps/<%=code%>/tsconfig.json
force: true
---
{
  "extends": "../../tsconfig.base.json",
  "include": ["./declaration.d.ts", "index.js", "./app/**/*"],
  "compilerOptions": {
    "baseUrl": "./app"
  }
}
