//Who likes it? --6kyu Codewars
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//Not sure how this is 6kyu, seems like a simple logic tree
let names = ["Alex", "Jacob", "Mark", "Max"]

function likes(names) {
 if(names.length===0){
    return "no one likes this"
  }else if(names.length===1){
    return `${names[0]} likes this`
  } else if(names.length===2){
    return `${names[0]} and ${names[1]} like this`
  } else if(names.length===3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  }
}

console.log(likes(names))

//Clever solution using an object
function likes2(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}