<Wrapper {...(id => {
  if (__DEV__ !== true) return {};
  return {
    "testID": id,
    "accessibilityLabel": id,
    "accessible": true
  };
})('greetings-wrapper')}>
  <Hello {...(id => {
    if (__DEV__ !== true) return {};
    return {
      "testID": id,
      "accessibilityLabel": id,
      "accessible": true
    };
  })('greetings')} />
</Wrapper>;
