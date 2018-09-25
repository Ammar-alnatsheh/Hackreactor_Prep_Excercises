/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:
* It should not use the multiply operator (*).\

var output = multiply(4, 7);
console.log(output); // --> 28
*/

function multiply(num1, num2) {

  var negative = (num1 < 0 && num2>0) || (num1 > 0 && num2 < 0) ? true : false ;

  num1 = Math.abs(num1);

  num2 = Math.abs(num2);

  var sum = 0;

  for (var i=0; i< num2; i++){

    sum += num1;

  }

  if(negative){

    return 0 - sum ;

  }else{

    return sum;

  }

}
