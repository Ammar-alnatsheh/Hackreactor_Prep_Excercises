/*
Write a function called "getEvenElementsAtProperty".

Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no even elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
*/

function getEvenElementsAtProperty(obj, key) {

    result = [];

    if(obj.hasOwnProperty(key)){

    var value = obj[key];

    if(Array.isArray(value) ){

        for(var i =0; i<value.length; i++){

          if( isEven(value[i]) ){

            result.push(value[i]);

          }

        }

      }

  }

  return result;

}

function isEven(num) {

  if ( num % 2 === 0 ){

    return true;

  }else{

    return false;

  }
}
