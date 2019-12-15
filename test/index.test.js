const { default: pluginTester } = require('babel-plugin-tester/pure');
const plugin =  require('..');
const path = require('path');

pluginTester({
  plugin,
  fixtures: path.join(__dirname, '__fixtures__'),
  babelOptions: {
    configFile: path.join(__dirname, 'babel.config.json')
  }
})
