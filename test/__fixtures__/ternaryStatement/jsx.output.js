<Hello {...(id => {
  if (__DEV__ !== true) return {};
  return {
    "testID": id,
    "accessibilityLabel": id,
    "accessible": true
  };
})(a === 1 ? '1st' : '!1st')} />;
