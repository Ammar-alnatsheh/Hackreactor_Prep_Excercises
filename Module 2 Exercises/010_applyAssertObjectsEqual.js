/*

Write an "assertObjectsEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test the function provided.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/


// Your assertion function:
function assertObjectsEqual(actual, expected, testName) {
  var equal = true;

  for ( i in expected) {

    if ( actual[i] !== expected[i] ) {
      equal = false;
      break;
    }

  }

  if ( Object.keys(actual).length !== Object.keys(expected).length ){
    equal = false;
  }

  if ( equal ) {
    console.log('passed');

  } else {
    console.log("FAILED [my test] Expected " + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
  }
}

// Your code under test:
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

// Your calls to 'assertObjectsEqual':

var actual = {
  firstName: 'Ammar',
  lastName: 'Alnatsheh'
};

var expected = {
  firstName: 'Ammar',
  lastName: 'Alnatsheh',
  fullName: 'Ammar Alnatsheh'
};

assertObjectsEqual(addFullNameProp(actual), expected, "Add full name");
assertObjectsEqual(addFullNameProp({}), {}, "handle empty object");
