/*
Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (60  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
* If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
* There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(score) {

  var plusOrMinus = score % 10;

  if(score === 100){

    return 'A+';
  }else if(score < 100 && score >= 90){

    if (plusOrMinus === 0 || plusOrMinus === 1 || plusOrMinus === 2 ){

      return 'A-';

    }else if(plusOrMinus === 8 || plusOrMinus === 9 ){

      return 'A+';

    }else{

      return 'A';
    }

  }else if(score < 90 && score >= 80){

        if (plusOrMinus === 0 || plusOrMinus === 1 || plusOrMinus === 2 ){

      return 'B-';

    }else if(plusOrMinus === 8 || plusOrMinus === 9 ){

      return 'B+';

    }else{

      return 'B';
    }

  }else if(score < 80 && score >= 70){

        if (plusOrMinus === 0 || plusOrMinus === 1 || plusOrMinus === 2 ){

      return 'C-';

    }else if(plusOrMinus === 8 || plusOrMinus === 9 ){

      return 'C+';

    }else{

      return 'C';
    }

  }else if(score < 70 && score >= 60){

        if (plusOrMinus === 0 || plusOrMinus === 1 || plusOrMinus === 2 ){

      return 'D-';

    }else if(plusOrMinus === 8 || plusOrMinus === 9 ){

      return 'D+';

    }else{

      return 'D';
    }

  }else if(score < 60 && score >= 0){

    return 'F';

  }else{

    return 'INVALID SCORE';

  }

}
