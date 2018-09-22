/*
Write a function called "isEitherEven".
Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.
var output = isEitherEven(1, 4);
console.log(output); // --> true
*/

function isEitherEven(num1, num2) {

  return isEven(num1) || isEven(num2) ;

}

function isEven(num) {

  if ( num % 2 === 0 ){

    return true;

  }else{

    return false;

  }

}
