/*
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
*/

function countAllCharacters(str) {

    result = {};

  if (str === ''){

    return result;
  }

  var chars = str.split('');

  for (var i =0 ; i<chars.length; i++){

    if (result.hasOwnProperty(chars[i])){

      result[chars[i]] = result[chars[i]] + 1;

    }else{

      result[chars[i]] = 1;

    }

  }

  return result;

}
