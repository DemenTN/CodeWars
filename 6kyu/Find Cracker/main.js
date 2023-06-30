////////Code Wars: Find Cracker. -6kyu
// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>
// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
// ["name2", 140, ["B", "A", "A", "A"]],
// ["name3", 200, ["B", "A", "A", "C"]]
// ];
// The scores for each grade is:
// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.
// Returns the name of the hacked name as an array when scoring with this rule.
// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
// ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
// ["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
// ];
// return ["name1", "name3"];

//Let's start with the test case and see how we're going to cycle through the nested arrays
//For each 'object' in array, going to add up object[2] and compare with object[1], return object[0] if false
//going to make some messy conditionals first go around:
//Let's start with making a helper function that converts the values
//1st logic gate: is array[i]object[2].length >= 5, sub gate: are all elements A || B
//if false: add up all numbers, if over 200> return 200
//compare name point with real point

//The best solution listed:
function findHack(arr) {
  let score = {
    A: 30,
    B: 20,
    C: 10,
    D: 5
  }
  function calc(a){
    let bonus = (a.length >= 5 && a.every(g => g == 'A' || g == 'B')) ? 20 : 0;
    return a.map(g => score[g] || 0).reduce((a,b)=>a+b,0)+bonus;
  }
  return arr.filter(a => {
    return a[1] > 200 || calc(a[2]) !== a[1];
  }).map(a => a[0]); 
}
//Take-aways: the every method, and mapping values to an object

//Below was my code

//test cases
let array = [
["name1", 445, ["B", "A", "A", "C", "A", "A","A", "A"]],
["name3", 160, ["B", "A", "A", "A","A"]],
["name2", 200, ["B", "A", "A", "C"]]
];

let finalResult = []

//main code block with two callbacks
for(let i=0;i<array.length;i++){
 
  let arr = array[i][2]
  arr.push(isGoodGrades(arr))
  let arrNumbers = arr.map(convertLetter)
  let result = arrNumbers.reduce((sum, current) => sum + current, 0)
  if(result>200){
    result = 200
  }
  if(result !== array[i][1]) {
    finalResult.push(array[i][0])
  }
}



//Callback for special condition, turns out some of the test cases included grades of G and H
function isGoodGrades(arr) {
  if(arr.length >= 5){
    if(arr.join('').includes('C')||arr.join('').includes('D')||arr.join('').includes('F')){
      return 0
    } else {
      return 20
    }
  } else {
    return 0
  }
}

//Callback for converting letters to numbers, mapping to an object would have been better
function convertLetter(letter) {
  if(letter==='A'){
    return 30
  }else if(letter==='B'){
    return 20
  }else if(letter==='C'){
    return 10
  }else if(letter==='D'){
    return 5
  }else if (letter===20){
    return 20
  }else{
    return 0
  }
}
