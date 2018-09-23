/*
Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even.

Notes:
* It does so without using the modulo operator (%).
* It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true
*/

function isEvenWithoutModulo(num) {

  if (num === 1 || num === -1){

    return false;

  }else if (num === 0){

    return true;

  }else{

    if(num > 0){

      return isEvenWithoutModulo(num-2);

    }else{

      return isEvenWithoutModulo(num+2);

    }

  }

}
