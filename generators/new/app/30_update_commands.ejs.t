---
sh: |
  # Update Commands
  set -o errexit; # Exit on most errors
  set -o nounset; # Disallow expansion of unset variables
  set -o pipefail; # Use last non-zero exit code in a pipeline

  cd apps/<%= code %>;

  yarn dot-json "./package.json" name "<%= package_name %>";
  yarn dot-json "./package.json" scripts.android "run-p metro native:android";
  yarn dot-json "./package.json" scripts.ios "run-p metro native:ios";
  yarn dot-json "./package.json" scripts."native:android" "react-native run-android --no-packager";
  yarn dot-json "./package.json" scripts."native:ios" "react-native run-ios --no-packager";
  yarn dot-json "./package.json" scripts.metro "react-native start --port 8081 --verbose";
  yarn dot-json "./package.json" scripts.gradle "cd android && gradle";
  yarn dot-json "./package.json" scripts.setup "run-s setup:*";
  yarn dot-json "./package.json" scripts."setup:gradle" "yarn gradle wrapper";
  yarn dot-json "./package.json" scripts."types" "tsc";

  # remove unused
  yarn dot-json "./package.json" scripts.start --delete;
---
