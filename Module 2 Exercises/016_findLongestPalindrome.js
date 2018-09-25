/*
Find the longest single-word palindrome within a phrase.
The phrase will only contain letters (no symbols, punctuation, or numbers).
Your palindrome detection should be case-insensitive.
If there are multiple longest palindromes of equal length, return the last one.
*/
function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  var words = sentence.split(' ').reduce(function(array, word){
    if (isPalindrome(word)){
      array.push(word);
    }

    return array;
  }, []);

  return words.sort(sortAscendingByLength)[0];
}


function reverseString(string) {
  return string.toLowerCase().split('').reverse().join('');
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return word.toLowerCase() === reverseString(word);
}

function sortAscendingByLength(firstWord, secondWord) {
  return secondWord.length - firstWord.length;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
  console.log("FAILED [" + testName + "] Expected \"" + expected + "\", but got \"" + actual + "\"");
  }
}

assertEqual(findLongestPalindrome('ammar and anna finish writting this code by the noon time for hackreactor which has Refer by mom'),'Refer','find Longest Palindrome');
