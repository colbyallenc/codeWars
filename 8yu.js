
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
       
            var find = function(string,array){
                var i = string.length
            while (i--){
                if (string[i]===array){
                return true;
                }
            }
            return false
            }
       

        // or

    
            var find = function(string, array) {
                return (array.includes(string))? true : false
                //ternary operator -- condition? value if true:value of false
             // The includes method determines whether an array contains a specified element
            };

// <!-- ******************************************************************************************** -->

    
//  Find the greatest corresponding sequence of 5 digit interger in given number
//  Complete the solution so that it returns the largest five digit number found within the number given.. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

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


// Triangular numbers are so called because of the equilateral triangular 
// shape that they occupy when laid out as dots. i.e. Return the nth triangular number

        function triangular( n ) {
        
            var sum = 0;

            if (n <= 0) {
                return 0;
            } else {
                for (i = n; i > 0; i--) {
                    sum += i
                }
            }
            return sum;
        }

// ******************************************************************************************** -->
