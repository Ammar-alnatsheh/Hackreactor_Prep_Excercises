/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string.

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

function countWords(str) {

  result = {};

  if (str === ''){

    return result;
  }

  var words = str.split(' ');

  for (var i =0 ; i<words.length; i++){

    if (result.hasOwnProperty(words[i])){

      result[words[i]] = result[words[i]] + 1;

    }else{

      result[words[i]] = 1;

    }

  }

  return result;

}
