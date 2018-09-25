/*
Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
*/

function findSmallestElement(arr) {

  if(Array.isArray(arr) && arr.length >0){

      var smallestElement = arr[0];

      for (var i=1; i< arr.length; i++){

        smallestElement = (arr[i] < smallestElement) ? arr[i] : smallestElement ;

      }

      return smallestElement ;
  }

  return 0;

}
