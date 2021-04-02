---
sh: |
  SDK_VERSION=commandlinetools-linux-6609375_latest.zip
  ANDROID_BUILD_VERSION=30
  ANDROID_TOOLS_VERSION=30.0.3
  WATCHMAN_VERSION=4.9.0
  NDK_VERSION=20.1.5948944

  curl -sS https://dl.google.com/android/repository/${SDK_VERSION} -o /tmp/sdk.zip
  mkdir -p ${ANDROID_HOME}/cmdline-tools
  unzip -q -d ${ANDROID_HOME}/cmdline-tools /tmp/sdk.zip
  rm /tmp/sdk.zip

  yes | sdkmanager --licenses
  yes | sdkmanager "platform-tools" \
    "emulator" \
    "platforms;android-$ANDROID_BUILD_VERSION" \
    "build-tools;$ANDROID_TOOLS_VERSION" \
    "cmake;3.10.2.4988404" \
    "system-images;android-21;google_apis;armeabi-v7a" \
    "ndk;$NDK_VERSION"

  rm -rf ${ANDROID_HOME}/.android
---
