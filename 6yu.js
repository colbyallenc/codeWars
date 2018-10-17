// Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// come back to bit counting*******
// still dont understand it as well as i could

var countBits = function(n) {
  // set a count variable
    var count = 0;
  // while the number passed is greater than 0, 
    while(n > 0){
  // if number passed is odd count goes up 
      if(n%2 === 1) {
        count++;
      }

      n = Math.floor(n/2);
    }
    return count;
  };
  
  countBits(12)
// _____________________________________________________________________________


  /* Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be 
  built with the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted).

*/              //accepts 3 arguments (three sides of the trianle)
//                    |
function isTriangle(a,b,c)
   
{   // in a triangle, 2 sides combined must be greater than the 3rd side
  if(a+b > c && a+c > b && b+c > a) return true;
   return false;
}

isTriangle(2,3,2)

// _____________________________________________________________________________

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :

function iqTest(numbers) {
  var numArr = numbers.split(' ');
  var oddPosArr = [];
  var evenPosArr = [];
  for(var i = 0; i < numArr.length; i++) {
    // check if number is even
    if(numArr[i] % 2===0) {
      // console.log(numArr[i]);
      // if its even push index to even array
         evenPosArr.push(i + 1);
      // console.log(evenPosArr);
    } else {
      // if its odd push to odd array
      oddPosArr.push(i + 1);
      // console.log(evenPosArr);
    }
  }
  if(oddPosArr.length === 1) {
    return oddPosArr[0];
  } else {
    return evenPosArr[0];
  }
}

iqTest("2 4 3 6") // => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") // => 2 // Second number is even, while the rest of the numbers are odd

// _____________________________________________________________________________


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]



function array_diff(a, b) {
  const newArr=[];
  
  for(var i=0; i < a.length; i++){
    let currElem = a[i];
      if(b.indexOf(currElem) === -1){
        newArr.push(currElem)
      }
     } 
  return newArr
 }

//  ____________________________________________________
//  Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.

// Example:

reverseWords("This is an example!"); // returns "sihT si na !elpmaxe" reverseWords("double spaces"); // returns "elbuod secaps"

function reverseWords(str) {
  return  str.split('').reverse().join('').split(' ').reverse().join(' ')
}


// _________________________________________________________
// Combine and sort Two arrays


function sorted(num1, num2){
  let store = []
  let a = num1.toString().split(',');
  let b = num2.toString().split(',');

  let concat = a.concat(b).sort().join(',')
  store.push(concat)

  return store

}

sorted([1,2,4], [3,5,6])


// ____________________________________________________________-

// Climb stairs


//  var climbStairs = function(n) {
//      if(n === 0) return 0;
//     if(n === 1) return 1;
//      if(n === 2) return 2;
//     var climb = [0, 1, 2];
//     for(var i = 3; i <= n; i++)
//          climb[i] = climb[i - 1] + climb[i - 2];
//      return climb[n];
// };

// climbStairs(5)

/**
 * @param {number} n
 * @return {number}
 */
/**
 * Dynamic Programming - Memorized Recursive Version
 */
var W = [0, 1, 2];

var climbStairs = function(n) {
    if (W[n] === undefined){
        W[n] = climbStairs(n - 2) + climbStairs(n - 1);
    }

    return W[n];
};
