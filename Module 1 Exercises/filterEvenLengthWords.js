/*
Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
*/

function filterEvenLengthWords(words) {

  result = [];

  for( var i =0; i<words.length; i++){

    if( isEven(words[i].length) ){

      result.push(words[i]) ;

    }

  }

  return result;

}


function isEven(num) {

  if ( num % 2 === 0 ){

    return true;

  }else{

    return false;

  }
}
