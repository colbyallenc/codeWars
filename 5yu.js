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