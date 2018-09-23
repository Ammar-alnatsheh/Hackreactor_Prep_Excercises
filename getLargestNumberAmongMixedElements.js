/*
Write a function called "getLargestNumberAmongMixedElements".

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

function getLargestNumberAmongMixedElements(arr) {

  var numbersArray = [];

  for(var i =0; i<arr.length; i++){

    if( typeof arr[i] === 'number' ){

      numbersArray.push(arr[i]);

    }

  }

  if(numbersArray.length === 0){

    return 0;

  }else{

    var max = numbersArray[0];

    for (var i =1; i<numbersArray.length; i++){

      max = (max < numbersArray[i]) ? numbersArray[i] : max ;
    }

    return max;

  }

}
