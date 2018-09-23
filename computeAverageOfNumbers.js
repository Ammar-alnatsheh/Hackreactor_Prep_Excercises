/*
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average.

Notes:
* If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
*/

function computeAverageOfNumbers(nums) {

  var count = 0;

  for(var i=0; i<nums.length; i++){

    count += nums[i];
  }

  return count / nums.length || 0 ;

}
