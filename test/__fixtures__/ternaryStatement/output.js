<Hello
  {...(id => {
    if (__DEV__ !== true) return {};
    return {
      testID: testID,
      accessibilityLabel: testID,
      accessible: true
    };
  })(a === 1 ? "1st" : "!1st")}
/>;
