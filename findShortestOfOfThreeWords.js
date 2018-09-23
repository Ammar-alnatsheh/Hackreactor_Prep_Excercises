/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfOfThreeWords(word1, word2, word3) {

  var shortestWord = (word1.length <= word2.length ) ? word1 : word2 ;

  shortestWord = (word1.length <= word3.length ) ? word1 : word3 ;

  return shortestWord ;

}
