// Your task is to write a function which returns
// the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
let n = 5
let sum=0
let prev=1
for (let i=1;i<=n;i++) {
  //first 1/1
  //second 1/prev+3
  sum=sum+(1/(prev))
  prev=prev+3
  
}
console.log(sum.toFixed(2))