---
sh: |
  cd apps/<%= code %>/android
  grep -RiIl '../../node_modules' | xargs sed -i  's/\.\.\/\.\.\/node_modules/\$gradle\.ext\.repoRoot\/node_modules/g'
---

# Given you want to search for the string search and replace it with replace across multiple files, this is my battle-tested, one-line formula:

# grep -RiIl 'search' | xargs sed -i 's/search/replace/g'
# Quick grep explanation:

# -R - recursive search
# -i - case-insensitive
# -I - skip binary files (you want text, right?)
# -l - print a simple list as output. Needed for the other commands
