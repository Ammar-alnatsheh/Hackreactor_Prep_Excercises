/*
Write a function called "filterOddLengthWords".

Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
*/

function filterOddLengthWords(words) {

  result = [];

  for( var i =0; i<words.length; i++){

    if( isOdd(words[i].length) ){

      result.push(words[i]) ;

    }

  }

  return result;

}


function isOdd(num) {

  if ( num % 2 !== 0 ){

    return true;

  }else{

    return false;

  }
}
