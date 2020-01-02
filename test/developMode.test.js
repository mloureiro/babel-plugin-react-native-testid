const fs = require('fs')
const path = require('path')
const babel = require('@babel/core')

test('testID is transformed in develop mode', () => {
	const babelConfig = { plugins: ['@babel/plugin-syntax-jsx', require('..')] }

	const code = fs
		.readFileSync(
			path.join(__dirname, '__fixtures__', 'stringLiteral', 'code.js')
		)
		.toString()
		.trim()

	const transformed = fs
		.readFileSync(
			path.join(
				__dirname,
				'__fixtures__',
				'stringLiteral',
				'jsx.output.js'
			)
		)
		.toString()
		.trim()

	expect(babel.transformSync(code, babelConfig).code).toContain(transformed)
})
