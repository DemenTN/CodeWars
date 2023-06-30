// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
//and returns the same string with all even indexed characters in each word upper cased, 
//and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

//string to array with split
//even toUpperCase, starts over at 0 for each new word
//odd toLowerCase

//Refactored answer: take home is that I need more practice with map
toWeirdCase=(a)=>a.split` `.map(s=>[...s].map((e,i)=>i%2?e.toLowerCase():e.toUpperCase()).join``).join` `;



//tried at first with weird function, kept getting undefined error and am still not sure why.
//would like to revisit why both function and prototype didnt work
let string = 'String of longe sup'
let splitString = string.split(' ')


for(let i =0;i<splitString.length;i++) {
  splitString[i]=splitString[i].weird()
  console.log(splitString)
}

// function weird(string) {
//   let weirdString = '';
//   for(let i =0;string.length;i++){
//      weirdString += (i % 2 === 0)? string[i].toUpperCase():string[i].toLowerCase();
//     // if(i%2===0){
//     //   weirdString+=string[i].toUpperCase()
//     // }else{
//     //   weirdString+=string[i].toLowerCase()
//     // }
//   }
//  console.log(weirdString)
// }

String.prototype.weird = function( ){
  let newString = '';
  for(let i = 0; i< this.length ; i++){
    newString += (i % 2 === 0)? this[i].toUpperCase():this[i].toLowerCase();
  }
  return newString;
}    


    

