const fs = require('fs')
const path = require('path')
const babel = require('@babel/core')

test('testID not transformed in production mode', () => {
	process.env.BABEL_ENV = 'production'

	const babelConfig = { plugins: ['@babel/plugin-syntax-jsx', require('..')] }

	const code = fs
		.readFileSync(
			path.join(__dirname, '__fixtures__', 'stringLiteral', 'code.js')
		)
		.toString()
		.trim()

	expect(babel.transformSync(code, babelConfig).code).toContain(code)
})
