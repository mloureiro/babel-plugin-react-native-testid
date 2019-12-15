<Wrapper>
  <Hello
    {...(id => {
      if (__DEV__ !== true) return {};
      return {
        testID: testID,
        accessibilityLabel: testID,
        accessible: true
      };
    })("greetings")}
  />
</Wrapper>;
