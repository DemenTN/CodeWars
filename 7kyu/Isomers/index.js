// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//clever solution that was not mine using Set
// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }

function isIsogram(isogram){
  if (isogram == "") {
  return true
}

let str = isogram.toLowerCase()
let sortedStr = str.split('').sort()

for (let i = 0; i<sortedStr.length; i++) {
  if(sortedStr[i]===sortedStr[i+1]) {
    return false
  }
}
  return true
}
