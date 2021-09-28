function temperatureConverter(fahrenheitValue) {
    return Math.round((fahrenheitValue-32) / 1.8);
  }

test("converter works correctly", () => {
  expect(temperatureConverter(40)).toBe(4)
});

test("converter works correctly", () => {
    expect(temperatureConverter(50)).toBe(10)
});

test("converter works correctly", () => {
    expect(temperatureConverter(70)).toBe(21)
});