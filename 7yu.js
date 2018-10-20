// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:


function anagrams(string, array) {


  return array.filter(word=> {
    return word.split("").sort().join("") === string.split("").sort().join("");
  })

}

anagrams('racer', ['crazer', 'racar', 'caers'])




//   _____________________________________________________________

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
    let arr = string.toLowerCase().split('').sort()
    // console.log(arr)
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let includes = ''
    for( let i = 0 ; i < string.length ; i++){
      if (alphabet.includes(arr[i]) && !includes.includes(arr[i])){
        includes += arr[i]
      }
    }
    return includes == alphabet
  }
  
  isPangram("The quick brown fox jumps over the lazy dog.")
  // isPangram("The quick jumps over the lazy dog.")
  // _________________________________________

  // Breaking Chocolate Problem

// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

// 1x1 = 0  2x1 = 1   3x1 = 2
// 1x2 = 1  2x2 = 2   3x2 = 3
// 1x3 = 2  2x3 = 3   3x3 = 4
// 1x4 = 3  2x4 = 4   3x4 = 5
// 1x5 = 4  2x5 = 5   3x5 = 6

// we notice that by drawing out this figure, we can see that each side takes one less number of cuts
// here you can see that the result would equal (n - 1)(m-1)

// 2x6 :
// (n-1)+(m-1) = (2-1)+(6-1) = 6
                // 1  +  5  = 6 breaks

function chocolate(n,m){
  let result = (n-1)+(m-1);
  if(result < 0){
    return 0
  }
  return result
}

// chocolate(2,2);
chocolate(0,1);
// chocolate(2,2);
// chocolate(1,4);
// chocolate(2,5);