/*
Write a function called "areBothOdd".
Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.
var output = areBothOdd(1, 3);
console.log(output); // --> true
*/

function areBothOdd(num1, num2) {

  return isOdd(num1) && isOdd(num2) ;

}

function isOdd(num) {

  if ( num % 2 !== 0 ){

    return true;

  }else{

    return false;

  }

}
