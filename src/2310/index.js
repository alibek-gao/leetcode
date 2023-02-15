// 2310. Sum of Numbers With Units Digit K
// https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/

function minimumNumbers(num, k) {
  if (num === 0) return 0
  if (k === 2 && num%2 !== 0) return -1
  const unit = num % 10
  for (let i = 1; i <= 10 && k * i <= num; i++) {
    if (unit === i * k % 10) {
      return i
    }
  }
  return -1
}

module.exports = minimumNumbers