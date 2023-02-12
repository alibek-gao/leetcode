// 990. Satisfiability of Equality Equations
// https://leetcode.com/problems/satisfiability-of-equality-equations/

function equationsPossible(equations) {
  const alphabet = new Map()
  const find = (a) => {
    alphabet.set(a, alphabet.get(a) || a);
    return alphabet.get(a) === a ? a : find(alphabet.get(a));
  }
  const union = (x, y) => alphabet.set(find(x), find(y))

  for (const equation of equations) {
    if (equation[1] === '=') {
      union(equation[0], equation[3])
    }
  }

  for (const equation of equations) {
    if (equation[1] === '!') {
      if (find(equation[0]) === find(equation[3])) {
        return false
      }
    }
  }
  return true
}

module.exports = equationsPossible
