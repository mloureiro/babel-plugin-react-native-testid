React.createElement(
	Wrapper,
	{
		testID:'greetings-wrapper',
		accessibilityLabel:'greetings-wrapper',
		accessible:true
	},
	React.createElement(
		Hello,
		{
			testID:"greetings",
			accessibilityLabel:"greetings",
			accessible:true
		}
	)
);
