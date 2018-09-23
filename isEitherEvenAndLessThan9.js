/*
Write a function called "isEitherEvenAndLessThan9".

Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false
*/

function isEitherEvenAndLessThan9(num1, num2) {

  return ( isEven(num1) || isEven(num2) ) &&  num1 < 9 && num2 < 9 ;

}

function isEven(num) {

  if ( num % 2 === 0 ){

    return true;

  }else{

    return false;

  }

}
