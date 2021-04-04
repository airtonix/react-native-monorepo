---
sh: |
  # Setup
  set -o errexit; # Exit on most errors
  set -o nounset; # Disallow expansion of unset variables
  set -o pipefail; # Use last non-zero exit code in a pipeline

  cd apps/<%= code %>;
  yarn setup;
---
