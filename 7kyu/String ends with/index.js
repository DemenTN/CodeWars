// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//check end.length
//subtract end.length from string.length 
//slice using difference and compare
function solution(str, end){
    let diff = str.length - end.length
    let ans = str.slice(diff) 
     if (ans === end) {
       return true
     } else {
       return false
     }
   }
   
   //Ah, did not know there was an endsWith method
   function solution(str, ending){
     return str.endsWith(ending);
   }