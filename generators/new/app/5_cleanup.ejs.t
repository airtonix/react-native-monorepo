---
sh: |
  cd apps/<%= code %>/android
  rm ./flow*
  mv ./__test__/* ./
  rm -rf ./__test__
---
