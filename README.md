# React Native Monorepo

- many apps
- much design system
- so generator

---

## Setup

Setting up a succesful react-native project is complicated, we mitigate some of this complexity
by leaning on asdf to install correct tooling for us.

1. have asdf installed
2. install asdf plugins: java, gradle, nodejs, yarn, ruby
3. confirm asdf setup `asdf info`

```
> asdf info
OS:
Linux somethingsomethingsomethingdarkside 5.15.14-100.fc34.x86_64 #1 SMP Tue Jan 11 16:53:51 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux

SHELL:
zsh 5.8 (x86_64-redhat-linux-gnu)

ASDF VERSION:
v0.8.1-a1ef92a

ASDF ENVIRONMENT VARIABLES:
ASDF_DIR=/home/zenobius/.asdf

ASDF INSTALLED PLUGINS:
gradle                       https://github.com/rfrancis/asdf-gradle.git
java                         https://github.com/halcyon/asdf-java.git
nodejs                       https://github.com/asdf-vm/asdf-nodejs.git
ruby                         https://github.com/asdf-vm/asdf-ruby.git
yarn                         https://github.com/twuni/asdf-yarn.git
```

4. run `asdf install`
5. confirm successful tooling

```
> asdf current
gradle          7.3.3           /home/zenobius/Projects/Mine/Github/react-native-monorepo/.tool-versions
java            adoptopenjdk-8.0.222+10.1 /home/zenobius/Projects/Mine/Github/react-native-monorepo/.tool-versions
nodejs          12.13.1         /home/zenobius/Projects/Mine/Github/react-native-monorepo/.tool-versions
ruby            2.5.8           /home/zenobius/Projects/Mine/Github/react-native-monorepo/.tool-versions
yarn            1.22.10         /home/zenobius/Projects/Mine/Github/react-native-monorepo/.tool-versions
```

3. download android studio
4. `ios` download xcode (make sure `xcode-select` can run)
5. run `yarn i`
