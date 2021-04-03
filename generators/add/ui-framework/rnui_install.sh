#!/usr/bin/env sh
set -o errexit # Exit on most errors
set -o nounset # Disallow expansion of unset variables
set -o pipefail # Use last non-zero exit code in a pipeline

packagePath=${1:-}
[ -z "${packagePath}" ] && {
  echo "missing install path" && exit 1;
}
echo "👍 Installing RNUI Framework";
cd $packagePath;

yarn add react-native-ui-lib react-native-gesture-handler react-native-reanimated @react-native-community/blur @react-native-community/datetimepicker @react-native-community/netinfo @react-native-picker/picker;

cd ios && pod install;

echo "
👍 RNUI Installed.

  ℹ https://wix.github.io/react-native-ui-lib
"
