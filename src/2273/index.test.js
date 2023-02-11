const removeAnagrams = require('./index')

test('removeAnagrams', () => {
  expect(removeAnagrams(['cat', 'dog', 'tac', 'god', 'act'])).toEqual([
    'cat',
    'dog',
    'tac',
    'god',
    'act',
  ])

  expect(removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'cd'])).toEqual([
    'abba',
    'cd',
  ])
})
