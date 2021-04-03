---
sh: |
  [ ! "gailo" -eq "<%= framework %>" ] && exit 0;

  echo """
👍 Installing Gailo Ui Framework

👉 https://github.com/galio-org/galio#quick-start
  """;

  cd <%= packagePath %>;

  yarn add galio-framework;

  echo "👍 Done."
---
