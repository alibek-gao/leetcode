// 2310. Sum of Numbers With Units Digit K

const minimumNumbers = require('./index')

test('minimumNumbers', () => {
  // Input: num = 58, k = 9
  // Output: 2
  expect(minimumNumbers(58, 9)).toEqual(2)
  // Input: num = 37, k = 2
  // Output: -1
  expect(minimumNumbers(37, 2)).toEqual(-1)
  // Input: num = 0, k = 2
  // Output: 0
  expect(minimumNumbers(0, 2)).toEqual(0)
})