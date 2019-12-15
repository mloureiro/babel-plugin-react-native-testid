<Hello
  {...(id => {
    if (__DEV__ !== true) return {};
    return {
      testID: testID,
      accessibilityLabel: testID,
      accessible: true
    };
  })(getTestIdValue(a, b))}
/>;
