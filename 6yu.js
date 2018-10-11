// Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//http://www.wikihow.com/Convert-from-Decimal-to-Binary


var countBits = function(n) {
    var count = 0;
    while(n > 0){
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