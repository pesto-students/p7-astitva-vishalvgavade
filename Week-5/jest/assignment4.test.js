const mathOperations = require("./assignment4");
//test('should first', sum)
test("Addition", () => {
  expect(mathOperations.sum(4, 5)).toBe(9);
});
test("Subtraction", () => {
  expect(mathOperations.diff(10, 5)).toBe(5);
});
test("Multiplication", () => {
  expect(mathOperations.product(5, 4)).toBe(20);
});
