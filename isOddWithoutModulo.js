/*
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%).
* It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
console.log(output); // --> true
*/

function isOddWithoutModulo(num) {

  if (num === 1 || num === -1){

    return true;

  }else if (num === 0){

    return false;

  }else{

    if(num > 0){

      return isOddWithoutModulo(num-2);

    }else{

      return isOddWithoutModulo(num+2);

    }

  }

}
