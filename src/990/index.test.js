const equationsPossible = require('./index')

test('equationsPossible', () => {
  expect(equationsPossible(['a==b', 'b!=a'])).toEqual(false)

  expect(equationsPossible(['b==a', 'a==b'])).toEqual(true)

  expect(equationsPossible(['a==b', 'b==c', 'a==c'])).toEqual(true)

  expect(equationsPossible(['a==b', 'b!=c', 'c==a'])).toEqual(false)

  expect(equationsPossible(['c==c', 'f!=a', 'f==b', 'b==c'])).toEqual(true)
})
