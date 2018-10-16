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