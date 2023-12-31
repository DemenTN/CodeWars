//Multiples of 3 or 5 -- 6kyu
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

//more succinct solution:
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

//my solution
function solution(number){
  let numArray = []
  let multArray = []
  
  //if(number<0)
  for(let i=1;i<number;i++){
    numArray.push(i)
  }
  console.log(numArray)
  for(let i =0;i<numArray.length;i++){
    if(numArray[i]%3===0 || numArray[i]%5===0 ){
      multArray.push(numArray[i])
    }
  }
  console.log(multArray)
  let result = multArray.reduce((sum,acc)=>sum+acc,0)
  console.log(result)
}
