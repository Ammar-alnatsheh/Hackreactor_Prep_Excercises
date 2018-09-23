/*
Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
*/

function getLargestElement(arr) {

  if(Array.isArray(arr) && arr.length >0){

      var largestElement = arr[0];

      for (var i=1; i< arr.length; i++){

        largestElement = (arr[i] > largestElement) ? arr[i] : largestElement ;

      }

      return largestElement ;
  }

  return 0;

}
