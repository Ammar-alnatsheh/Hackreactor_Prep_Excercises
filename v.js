/*
Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
*/

function computeSumOfAllElements(arr) {

  var sum =0;

  for( var i=0; i<arr.length; i++){

    sum += arr[i];

  }

  return sum;

}
