# React Native testID Babel Plugin

![CI Status](https://github.com/mloureiro/babel-plugin-react-native-testid/workflows/build/badge.svg)

#### What it does:

This plugin transform `testID` JSX attributes into accessibility properties
so that Android can be found on black box end-to-end tooling like [Appium](https://appium.io/).

#### Why is it needed:

On Android for the application elements to be targetable/found it needs 
to use the `resourceId`, we assumed React Native would convert `testID`
to `resourceId`, unfortunately it didn't. With a quick search, you'll
find a few dozens of closed tickets on this subject.

To achieve this we could do the same approach as [react-native-testid](https://github.com/tipsi/react-native-testid),
but this meant that the developer is responsible to remember to use this
tool, plus it means changing the code every where with this change.

Another possibility would be to wrap all React Native components with
this converter (`testID` to accessibility on Android) and make a proxy
module with them. This has a similar flaw like the previous idea, the 
developer must remember to import the React Native components from our
custom module.

This solution (current plugin) allow us developers to code as before, 
completely oblivious of these `testID` differences between Android and
iOS.

#### Background story:

We used [Detox](https://github.com/wix/detox) to test our app from an 
end-to-end perspective. Detox takes the gray box approach, which means
the package as to be installed directly onto the app so that it can work.

Besides having some challenges with Detox itself and we preferring the 
black box approach, the main flaw for us is that Detox (currently) does
not support to run tests on real devices. After some investigation we
found [Appium](https://appium.io/), and here is where the reason for this
plugin pop'ed.


## Install

#### With NPM

```bash
$ npm install --save-dev @mloureiro/babel-plugin-react-native-testid
```

#### With Yarn

```bash
$ yarn add --dev @mloureiro/babel-plugin-react-native-testid
```

## Usage

Add the plugin to your [babel configuration](https://babeljs.io/docs/en/configuration)

For example in `.babelrc` or `babel.config.json` it is:

```json
{
  "plugins": ["@mloureiro/babel-plugin-react-native-testid"]
}
```

> **Note**: to improve the code use this configuration only for development
builds, to improve even more use [babel-plugin-remove-test-ids](https://github.com/kutyel/babel-plugin-remove-test-ids),
remember to set the remove plugin to use the attribute `testID`, check
their documentation
