/*
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
*/

function findShortestElement(arr) {

  if(Array.isArray(arr) && arr.length >0){

      var shortestElement = arr[0];

      for (var i=1; i< arr.length; i++){

        shortestElement = (arr[i].length < shortestElement.length) ? arr[i] : shortestElement ;

      }

      return shortestElement ;
  }

  return '';

}
