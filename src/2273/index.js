// 2273. Find Resultant Array After Removing (Contiguous) Anagrams
// https://leetcode.com/problems/find-resultant-array-after-removing-anagr

function removeAnagrams(arr) {
  let prevSorted = ''
  const result = []
  for (const word of arr) {
    const sorted = word.split('').sort().join('')
    if (sorted !== prevSorted) {
      result.push(word)
    }
    prevSorted = sorted
  }
  return result
}

module.exports = removeAnagrams