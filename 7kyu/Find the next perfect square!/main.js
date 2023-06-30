//7 kyu Find the next perfect square!

// Complete the findNextSquare method that finds the next 
//integral perfect square after the one passed as a parameter. 
//Recall that an integral perfect square is an integer n such that
// sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then 
//-1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)
// 121 --> 144

//another mathy problem, formula from web: x+2*sqrt(x)+1
//how to test if perfect square? from mdm: Number.isInteger()
//testing method
//console.log(Number.isInteger(6)) //returns true

function findNextSquare(sq) {
    return (Number.isInteger(Math.sqrt(sq)) ? sq+2*Math.sqrt(sq)+1 : -1)
  }

   console.log(findNextSquare(64)) 