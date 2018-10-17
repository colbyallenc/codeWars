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

    // ___________________________________________________________

  
// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)



function pickPeaks(arr) {
  var pos = -1;
  var result = { pos: [], peaks: [] };
  if (arr.length === 0) {
    return result;
  }
  arr.forEach(function(array, i) {
    if (arr[i] > arr[i - 1]) {
      pos = i;
    } else if (arr[i] < arr[i - 1] && pos != -1) {
      result.pos.push(pos);
      result.peaks.push(arr[pos]);
      pos = -1;
    }
  });

  return result;
}

// or


function pickPeaks(arr) {
    var pos = [], peaks = [], lastIncreased = null;
    arr.forEach(function(e, i) {
      if (arr[i] > arr[i - 1]) {
        lastIncreased = i;
      } else if (arr[i - 1] > arr[i] && lastIncreased !== null) {
        pos.push(lastIncreased);
        peaks.push(arr[lastIncreased]);
        lastIncreased = null;
      }
    });
    return {pos:pos,peaks:peaks};
  }
  
  pickPeaks([1,2,3,4,5,4,3,2,4,5,6,3,2]);

//   ________________________________________________________

//Count the number of Duplicates
/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

Example:
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabbcdeB" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i'
"Indivisibilities" -> 2 # 'i' and 's'
"aa11" -> 2 # 'a' and '1'
*/

function duplicateCount(text){
    var arr = text.toLowerCase().split(''); 
    
    var newArr = arr.filter(function(a, b) {
      return arr.indexOf(a) !== b;
    });
    
    return newArr.filter(function(item, pos) {
      return newArr.indexOf(item) == pos;
    }).length;
  }


//   _________________________________________________________

// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    var words = str.split(' ')
    var backward = words.map(function(word){
          return word.substr(1) + word.charAt(0) + 'ay'
    })
    return backward.join(' ')
  }
  
// ___________________________________________________________
// Two Sums

function twoSums(numbers, target){
    let sets = [];
 
    for(var i=0; i < numbers.length-1; i++ ){
      for(var j=i+1; j < numbers.length; j++){
        let a = numbers[i];
        let b = numbers[j];
       //  console.log([a,b]);
        let ind =[i,j];
        if (a+b === target && sets.indexOf(ind)=== -1 ){
          sets.push(ind) 
         }
     }
    }
    return sets
 }
 
 twoSums([2,4,7,4, 8,5,3,1], 9)

// ____________________________________________

/* Given an array and a value, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2. */

const removeElement = (arr, target) => {
  let length = arr.length;
  for (var i = 0; i < length; i++) {
    // if the value at current index matches the target value
    if (arr[i] === target) {
      // remove current index
      arr.splice(i, 1);
      // subtract 1 from length
      length--;
    }
  }
  return arr.length;
}

console.log(removeElement([3,2,2,3], 3));
// console.log(removeElement([1,2,2,4], 3));
// console.log(removeElement([1,2,2,4], 3));
// console.log(removeElement([1,2,3,4,5,6], 3));


// ________________________________________________________

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

function rob(input){
  let store = 0
  // i want to traverse through the array 
for(var i=0; i < input.length; i++){
  // if the [i] is odd i want to select that input and add it to the saved store
  if(i % 2===0){
    store += input[i] 
  }
}
  return store
}

rob([1,2,3,4,5])