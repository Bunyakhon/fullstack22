function findLongestRepeatedSubstring(inputStr) {
  let n = inputStr.length;
  let longest = "";
  for (let i = 0; i <= n; i++) {
    for (let j= i+1; j <= n + 1; j++) {
      let sub = inputStr.substring(i, j);
      let isRepeated = inputStr.indexOf(sub, i + 1) !== -1;
      if (isRepeated && sub.length > longest.length) {
        longest = sub;
      }
    }
  }
  return longest;
}
console.log(findLongestRepeatedSubstring("banana"));
console.log(findLongestRepeatedSubstring("abcd"));
console.log(findLongestRepeatedSubstring("ababa"));
