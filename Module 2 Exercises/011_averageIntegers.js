/*
Use the skeleton provided to write a working implementation.

Notes:
* Do not leave any functions in the skeleton unused.
* Test that your implementation works.

Specifically -- your code reviewer should be able to just press the [Run] button and see convincing evidence that your code works, because of:
a) the categorical reasoning displayed by your tests
b) the line(s) of output in the console log saying "passed" coming from those tests

*/

// Skeleton
function average(numbers) {
  // process array of numbers
  if (numbers.length === 0){
    return null;
  }else{
    return sum(numbers) / numbers.length ;
  }

}

function sum(numbers) {
  // process array of numbers
  if (numbers.length === 0){
    return null;
  }

  var total = 0;

  for( var i =0; i< numbers.length; i++){
    total += numbers[i];
  }

  return total;
}


function assertEqual(actual, expected, testName) {

  if ( actual === expected ) {
    console.log( 'passed' );
  } else {
    console.log('FAILED [' + testName + '] Expected \"' + expected + '\", but got \"' + actual + '\"');
  }

}

assertEqual(sum([]), null, 'sum empty array is null');
assertEqual(sum([1,2,3,4]), 10, 'sum return true value');
assertEqual(sum([-1,1,0]), 0, 'sum handle negative value');
assertEqual(average([]), null, 'avg empty array is null');
assertEqual(average([1,2,3,4,5]), 3, 'avg return true value');
assertEqual(average([-1,1,4,6,-5]), 1, 'avg handle negative value');
