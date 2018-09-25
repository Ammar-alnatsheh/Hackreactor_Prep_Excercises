/*

Write an "assertArraysEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test BOTH the functions in the provided code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/

// Your assertion function:
function assertArraysEqual(actual, expected, testName) {
  var equal = true;

  for ( i = 0; i <= expected.length; i++ ) {
    if ( actual[i] !== expected[i] ) {
      equal = false;
      break;
    }
  }

  if ( equal ) {
    console.log('passed');

  } else {
    console.log('FAILED ' + '[' + testName + ']' + ' Expected ' + '"' + expected + '",' + ' but got ' + '"' + actual + '"');
  }
}


// Your code under test:
function map(array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.push(callbackFunction(element));
  });
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n;
  });
}


// Your calls to 'assertArraysEqual':

assertArraysEqual(cubeAll([1,2,3], map), [1,4,9], 'Cube each element');
assertArraysEqual(cubeAll([-1,-2], map), [1,4], 'Cube negative element');
assertArraysEqual(cubeAll([], map), [], 'Accept empty array');
