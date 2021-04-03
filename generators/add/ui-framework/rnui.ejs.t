---
sh: |
  [ ! "rnui" -eq "<%= framework %>" ] && exit 0;

  echo "👍 Installing RNUI Framework";

  cd <%= packagePath %>;

  yarn add react-native-ui-lib react-native-gesture-handler react-native-reanimated @react-native-community/blur @react-native-community/datetimepicker @react-native-community/netinfo @react-native-picker/picker;

  cd ios && pod install;

---
