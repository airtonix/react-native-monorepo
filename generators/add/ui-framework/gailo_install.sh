#!/usr/bin/env sh
set -o errexit # Exit on most errors
set -o nounset # Disallow expansion of unset variables
set -o pipefail # Use last non-zero exit code in a pipeline

packagePath=${1:-}
[ -z "${packagePath}" ] && {
  echo "missing install path" && exit 1;
}

echo "👍 Installing Gailo Ui Framework";
cd $packagePath;

yarn add galio-framework;

echo "
👍 Gailo Installed.

  ℹ github.com/galio-org/galio#quick-start
"
