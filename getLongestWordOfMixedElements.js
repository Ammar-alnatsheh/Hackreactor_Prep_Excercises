/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string ("").
* If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/

function getLongestWordOfMixedElements(arr) {

  var wordsArray = [];

  for(var i =0; i<arr.length; i++){

    if( typeof arr[i] === 'string' ){

      wordsArray.push(arr[i]);

    }

  }

  if(wordsArray.length === 0){

    return '';

  }else{

    var longestWord = wordsArray[0];

    for (var i =1; i<wordsArray.length; i++){

      longestWord = (longestWord.length < wordsArray[i].length) ? wordsArray[i] : longestWord ;
    }

    return longestWord;

  }

}
