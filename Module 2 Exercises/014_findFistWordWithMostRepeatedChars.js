/*
Flesh out the implementation and test it.

Implementation of WHAT, you say? What's the problem statement???

Well, you should be able to tell what this code is intended to do just from reading the starter "skeleton".

Assuming you find the above statement to be true upon reading the outline, well, then that illustrates the power of good outlining. You don't need a bunch of comments explaining the code. The code is effectively SELF-EXPLANATORY, even at this early, not-fully-implemented stage. This is the level of clarity that you should aim for in your own coding too.

===
*Some notes about the skeleton*

When you create such "skeletons" for your own programs, this is a good full-fledged sample to bear in mind.

Note the mixture of real "stub" code and pseudocode.

The stubs are just a few function names and a few key variable names, not whole for-loops and whatnot.

The pseudocode style we want for this purpose is at the level of precise English. It also is not describing for-loops and whatnot. It also is only inside functions. Don't pseudocode functions, just write the functions as empty stubs. That saves you precious time later, with less rewriting.

*/

function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  maxRepeatCount = 0;
  for (var i = 0; i < word.length; i++) {
    var count = 0;
    for (var j = 0; j < word.length; j++) {
      if (word[i] === word[j]) {
        // Count the instances of each letter
        count += 1;
      }
      if (count > maxRepeatCount) {
        // Iterate all the counts and find the highest
        maxRepeatCount = count;
      }
    }
  }
  // Return this word's max repeat count
  return maxRepeatCount;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var words = text.split(' ');
  // For each word...
  for (var i = 0; i < words.length; i++) {
    var repeatCountForWord = findMaxRepeatCountInWord(words[i])
    //  If that max repeat count is higher than the overall max repeat count, then
    if (repeatCountForWord > maxRepeatCountOverall) {
      //    update maxRepeatCountOverall
      //    update wordWithMaxRepeatCount
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = words[i];
    }
  }
  return wordWithMaxRepeatCount;
}


function assertEqualStrings(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected \"' + expected + '\", but got \"' + actual + '\"');
  }
}


assertEqualStrings(findFirstWordWithMostRepeatedChars('The pig flew over the moon'), 'moon', 'finds the first word with the most repeated characters');
assertEqualStrings(findFirstWordWithMostRepeatedChars('Squidward played his cacophonous clarinet'), 'cacophonous', 'finds the first word with the most repeated characters');
