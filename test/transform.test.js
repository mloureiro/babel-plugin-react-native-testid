const { default: pluginTester } = require('babel-plugin-tester/pure')
const plugin = require('..')
const path = require('path')

pluginTester({
	babelOptions: { plugins: ['@babel/plugin-syntax-jsx'] },
	fixtures: path.join(__dirname, '__fixtures__'),
	plugin
})
