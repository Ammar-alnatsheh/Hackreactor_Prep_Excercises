/*
Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
*/

function removeOddValues(obj) {
  for(var i in obj){

    if (typeof obj[i] === 'number'){

      if ( isOdd(obj[i]) ){

        delete (obj[i]);

      }

    }

  }

}

function isOdd(num) {

  if ( num % 2 === 0 ){

    return false;

  }else{

    return true;

  }

}
