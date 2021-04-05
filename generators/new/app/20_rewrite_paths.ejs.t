---
sh: |
  yarn replace-in-files \
    --string '../node_modules' \
    --replacement '../../../node_modules' \
    apps/<%= code %>/android/settings.gradle;

  yarn replace-in-files \
    --string '../node_modules' \
    --replacement '../../../node_modules' \
    apps/<%= code %>/android/build.gradle;

  yarn replace-in-files \
    --string '../../node_modules' \
    --replacement '../../../../node_modules' \
    apps/<%= code %>/android/app/build.gradle;

  # yarn replace-in-files \
  #   --string '../node_modules' \
  #   --replacement '../../../node_modules'
  #   apps/<%= code %>/ios/**/project.pbxproj;

---
