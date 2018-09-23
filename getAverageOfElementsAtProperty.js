/*
Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key.

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
*/

function getAverageOfElementsAtProperty(obj, key) {

  var sum = 0;
  var count = 1;

  if(obj.hasOwnProperty(key)){

  var value = obj[key];

  if(Array.isArray(value) && value.length > 0){

      count = value.length;

      for( var i=0; i< value.length; i++){

        sum += value[i] ;

      }

    }

  }

  return sum / count ;

}
