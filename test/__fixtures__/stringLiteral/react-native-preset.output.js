React.createElement(
	Hello,
	{
		testID: (function(id){
			if(__DEV__!==true)return{};
			return{
				"testID":id,
				"accessibilityLabel":id,
				"accessible":true
			};
		})('greetings')
	}
);
