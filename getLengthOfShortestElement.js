/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {

  if ( Array.isArray(arr) && arr.length > 0){

    var shortestElement = arr[0].length ;

    for(var i=1; i<arr.length; i++){

      if(arr[i].length < shortestElement){

        shortestElement = arr[i].length;

      }

    }

    return shortestElement;

  }

  return 0;

}
