// Asperand pixel counting -7kyu Codewars challenge

// You can paint an asperand by pixels in three steps:
// First you paint the inner square, with a side of k.
// Then you need to paint one pixel, that's laying diagonally relative to the inner square that you just painted ( the bottom-right corner of the inner square is touching the top-left corner of the pixel ). Let's call it the "bridge".
// Finally, you will need to paint the outer shape, connected diagonally to the "bridge" ( see the picture for more information ).
// Your task is to find the number of pixels that need to be painted, for different k:
// k = 1 => 11
// k = 2 => 18
// k = 3 => 26
// k = 4 => 34
// # Limitations are 1 ≤ k ≤ 1e9

//could not get my function to work with high numbers, turns out the answer
//was as simple as:
function countPixels(k){
  return Math.max(11,8*k+2)
}
//guess i could have looked at the example outputs and derived this simple formula, but procedurely speaking I don't know how they derived this

//my function (wrong)
function countPixels(k) {
  if(k==1 || k==2) {
    return (k+4)**2-6-(k+2)**2+k**2
  }
  return (k+4)**2-6-(k+2)**2+k**2-(k-2)**2
}


// Pseudo code used to figure out problem
//lets start with the inner square:
//1->1, 2->4, 3->8 (9-1), 4->12 (16-4)
//think in terms of square areas
//k=1:
//start from outer edge, positive space A3=(K+4)^2-4(the corners)-3(the bottom right edge)=18
//subtract negative space, A2 = (K+2)^2-1(bridge dot)=8
//add positive inner square, A1 = k^2 = 1
//A_T=A3-A2+A1=11 , ok so that works for k1 but need to account for k=3 and larger when there is 1 more layer of negative space
//k=3:
//A3=49-4-3=42
//A2=25-1=24
//A1=9
//adding A0, inner negative space which seems to be (k-2)^2 for k>2. Not intuitive without a visual 
//A0=(k-2)^2 = 1 
//A_T = 42 - 24 + 9 - 1 = 26