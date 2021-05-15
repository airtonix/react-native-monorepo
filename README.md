# React Native Monorepo

This is a boilerplate repo for large scalable commercial react native monorepos.

It's primary goals are:

- minimise yarn install time and disk space taken
- make it easier to keep various libraries consistent throughout the apps by adhering to monorepo basics.
- provide generators that allow for easier creation of new additions to the monorepo so that they continue to work within the concepts developed here.

It is still under construction. (see [roadmap](#roadmap) for where we're at).

- [Getting started](#getting-started)
- [How this works](#how-this-works)
- [Roadmap](#roadmap)
  - [Phase One](#phase-one)
  - [Phase Three](#phase-three)
  - [Future Goals](#future-goals)
- [Tips](#tips)
  - [Use a node version manager](#use-a-node-version-manager)

## Getting started

- fork this repo
- clone it locally
- have yarn and node (ideally [use a node manager]())
- `yarn setup`

## How this works

1. rewrite all references to node_modules from the apps package down to the repo root
   - `android/build.gradle`
   - `android/app/build.gradle`
   - `ios/Podfile`
2. use a custom metro config that ensures `node_modules` at the root of the repo is used.

## Roadmap

### Phase One

These are the bare minimum goals. For this to be worth doing we need to minimise the install time as more and more apps are added.

- [ ] Avoid `nohoist` in package.json
  - [ ] ios
  - [x] android
- [ ] Provide app generator
  - [ ] typescript
  - [ ] jest react-testing-library support
  - [ ] detox support
- [ ] Provide component generator
- [ ] Provide storybook app for components

### Phase Three

Make this commerically viable.
The goal here is that a team should be able to focus on making apps and components. Build, Release, Publishing and Changelog management should be completly automated.

- [ ] generated app launches in simulator
  - [ ] android
  - [ ] ios
- [ ] CICD
  - [ ] Fastlane tooling
  - [ ] github actions

### Future Goals

These are nice to have.

These tools represent the future so working out how to accomodate them will make our lives easier.

- [ ] Support pnpm
- [ ] Support yarn pnp
- [ ] support yarn 2

## Tips

### Use a node version manager

My pragmatic recommenddation is unfortunately going to be NVM.

When
