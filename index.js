const TestIdParameterName = 'id'
const buildMapTestIdFunction = t => originalAttribute =>
	t.jsxSpreadAttribute(
		t.callExpression(
			t.arrowFunctionExpression(
				[t.identifier(TestIdParameterName)],
				t.blockStatement([
					t.ifStatement(
						t.binaryExpression(
							'!==',
							t.identifier('__DEV__'),
							t.identifier('true')
						),
						t.returnStatement(t.objectExpression([]))
					),
					t.returnStatement(
						t.objectExpression([
							t.objectProperty(
								t.stringLiteral('testID'),
								t.identifier(TestIdParameterName)
							),
							t.objectProperty(
								t.stringLiteral('accessibilityLabel'),
								t.identifier(TestIdParameterName)
							),
							t.objectProperty(
								t.stringLiteral('accessible'),
								t.booleanLiteral(true)
							)
						])
					)
				])
			),
			[originalAttribute]
		)
	)

module.exports = function composeTestId({ types }) {
	if (process.env.BABEL_ENV === 'production') return {}

	const mapTestIdFunction = buildMapTestIdFunction(types)

	return {
		name: 'testId Wrapper',
		visitor: {
			JSXAttribute(path) {
				if (path.node.name.name !== 'testID') return

				const value = types.isExpression(path.node.value)
					? path.node.value
					: path.node.value.expression

				path.replaceWith(mapTestIdFunction(value))
			}
		}
	}
}
