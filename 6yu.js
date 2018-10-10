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

  