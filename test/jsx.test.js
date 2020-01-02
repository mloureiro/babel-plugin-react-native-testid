const plugin = require('..')
const babel = require('@babel/core')
const { buildTestArguments } = require('./helper')

test.each(
	buildTestArguments({ type: 'jsx' }).map(({ name, code, output }) => [
		name,
		code,
		output
	])
)('transform JSX: %s', (_, code, expected) => {
	const babelConfig = { plugins: ['@babel/plugin-syntax-jsx', plugin] }

	expect(babel.transformSync(code, babelConfig).code).toContain(expected)
})
