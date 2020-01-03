const babel = require('@babel/core')
const plugin = require('..')
const { buildTestArguments } = require('./helper')

test.each(
	buildTestArguments({type: 'react-native-preset'})
		.map(({ name, code, output }) => [name, code, output])
)('transform JSX: %s', (_, code, expected) => {
	const babelConfig = {
		filename: 'something-for-it-to-shut-up.js',
		plugins: [plugin],
		presets: ['module:metro-react-native-babel-preset']
	}

	expect(babel.transformSync(code, babelConfig).code)
		.toContain(expected.replace(/(^\s+|\n)/gm, ''))
})
