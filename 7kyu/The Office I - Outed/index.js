// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

let meet = {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}
let test = {'tim':0, 'boss':2, 'jim':2}

function outed(meet, boss) {
  let names = Object.keys(meet)
  let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
  return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
}

let members = 0
let arr= []
for(let key in test){
members++
 if(key==='boss'){
   test[key]=test[key]*2
 }
 arr.push(test[key])
}
let happiness = (arr.reduce((sum,acc)=>sum+acc,0))/members
let result = happiness<=5 ? 'Get Out Now!' : 'Nice Work Champ!'
console.log(result)
