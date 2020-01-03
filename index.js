const buildTestJsxAttributes = t => value => [
	t.jsxAttribute(
		t.jsxIdentifier('accessibilityLabel'),
		t.jsxExpressionContainer(value)
	),
	t.jsxAttribute(
		t.jsxIdentifier('accessible'),
		t.jsxExpressionContainer(t.booleanLiteral(true))
	)
]

module.exports = function composeTestId({ types }) {
	if (process.env.BABEL_ENV === 'production') return {}

	const mapTestIdFunction = buildTestJsxAttributes(types)

	return {
		name: 'testId Wrapper',
		visitor: {
			JSXAttribute(path) {
				if (path.node.name.name !== 'testID') return

				const value = types.isExpression(path.node.value)
					? path.node.value
					: path.node.value.expression

				path.insertAfter(mapTestIdFunction(value))
			}
		}
	}
}
