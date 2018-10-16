
// Find Maximum and Minimum Values of a List
// My task was to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.
      
            var min = function(list){
                return Math.min(...list)
            }
            //find the min of the array list
            min([9,2,6,4])

            var max = function(list){
                return Math.max(...list)
            }
            //find the max of array list
            max([9,2,5,3])
      

// ******************************************************************************************** -->


// Find something in an Array
// My task was to create a find function that takes a string and an array as arguments. If the string is in the array, return true.
       
            // var find = function(string,array){
            //     var i = string.length
            // while (i--){
            //     if (string[i]===array){
            //     return true;
            //     }
            // }
            // return false
            // }
    
        // or
    
            var find = function(string, array) {
                return (array.includes(string))? true : false
                //ternary operator -- condition? value if true:value of false
             // The includes method determines whether an array contains a specified element
            };

// <!-- ******************************************************************************************** -->

    
//  Find the greatest corresponding sequence of 5 digit interger in given number
//  My task was to complete the solution so that it returns the largest five digit number found within the number given.. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

        function solution(digits){
            var temp = String(digits);
            //save the inserted value as a string
            var greatest = parseInt(temp.slice(0,5));
            // The parseInt function parses a string and returns an integer.
            //create a variable to save the greatest 5 digits, start with the first five
            for (var i = 0;i<temp.length;i++){
            //iterate through the length of the temp
            if(temp.slice(i, i+5) > greatest){ 
                greatest = parseInt(temp.slice(i,i+5))
            //for every index, i can join it with the next 4 characters
            //then i can convert it to an integer
            //and compare it to the previously stored largest number (0 if first index)
            //if the current is greater, assign the value to the largest number variable
            //else the variable retains the same value and we move onto the next index
            }
            }
            return greatest 
        }

        solution(1234567890);


// ******************************************************************************************** -->


// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e. 
// My task was to return the nth triangular number

        function triangular( n ) {
        
            var sum = 0;
            //define a sum and start it at 0
            if (n <= 0) {
                return 0;
            } else {
                for (var i = n; i > 0; i--) {
                    sum += i
                }
            }
            return sum;
        }
 triangular(5)
// ******************************************************************************************** -->
// Can you find the needle in the haystack?
// My task was to write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle.

function findNeedle(haystack) {
    return haystack.includes('needle')?  `needle found at position ${haystack.indexOf('needle')}`: null
   }
   
   findNeedle("can you find the needle");

// ******************************************************************************************** -->
// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

// Note! a and b are not ordered!

// Example: 
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
// Waiting for the Feedback! Thanks!


// I initially wrote this but realized that it doesn't check to see if b is less than a
function GetSum( a,b ){
    var sum = 0;
    while(a !== b){
       for(var a; a <=b ; a++){
       sum += a
       }
       return sum
    }
    return a
    }
    
    GetSum(2,2)

// below is the correct solution 

function GetSum(a,b){
  var sum = 0;
  if(a === b){
    return a;
  } else if(a < b){  
    for(a; a <= b; a++){
      sum += a;
    }
  } else if(b < a){
    for(b; b <= a; b++){
      sum += b;
    }  
  }
  return sum;
}

GetSum(0,-1);

// ******************************************************************************************** -->

// Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
    var oddNumbers =[];
    for(var i=0; i<n; i++){
      if(i%2){
        oddNumbers.push(i)
      };
    };
    return oddNumbers.length
  };

// ******************************************************************************************** -->



