/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

function findSmallestNumberAmongMixedElements(arr) {

  var numbersArray = [];

  for(var i =0; i<arr.length; i++){

    if( typeof arr[i] === 'number' ){

      numbersArray.push(arr[i]);

    }

  }

  if(numbersArray.length === 0){

    return 0;

  }else{

    var min = numbersArray[0];

    for (var i =1; i<numbersArray.length; i++){

      min = (min > numbersArray[i]) ? numbersArray[i] : min ;
    }

    return min;

  }

}
