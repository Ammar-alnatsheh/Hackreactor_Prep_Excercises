/*
Write a function called "getOddLengthWordsAtProperty".

Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd length elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
*/

function getOddLengthWordsAtProperty(obj, key) {

    result = [];

    if(obj.hasOwnProperty(key)){

    var value = obj[key];

    if(Array.isArray(value) ){

        for(var i =0; i<value.length; i++){

          if( isOdd(value[i].length) ){

            result.push(value[i]);

          }

        }

      }

  }

  return result;

}

function isOdd(num) {

  if ( num % 2 !== 0 ){

    return true;

  }else{

    return false;

  }
}
