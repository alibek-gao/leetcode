function isAnagram(word1, word2) {
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}

module.exports = {
  isAnagram
}