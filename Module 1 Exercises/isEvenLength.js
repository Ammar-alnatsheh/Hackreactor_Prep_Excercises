
/*
Write a function called "isEvenLength".
Given a word, "isEvenLength" returns whether the length of the word is even.
var output = isEvenLength('wow');
console.log(output); // --> false
*/

function isEvenLength(word) {

  return isEven(word.length) ;

}


function isEven(num) {

  if ( num % 2 === 0 ){

    return true;

  }else{

    return false;

  }

}
