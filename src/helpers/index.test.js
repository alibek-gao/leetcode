const { isAnagram } = require('./')

test('isAnagram', () => {
  expect(isAnagram('abab', 'baba')).toEqual(true)
  expect(isAnagram('ababa', 'babab')).toEqual(false)
})
