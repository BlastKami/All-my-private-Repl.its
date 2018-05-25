/* This is list of all JS assignments I did in the school year of 2017-2018 as a Frshmen in a basic Introduction to Programming class. 
*/
/*
JavaScript: Fahrenheit and Centigrade Temperatures: 

Fahrenheit and centigrade are two temperature scales in use today.  The Fahrenheit scale was developed by the German physicist Daniel  Gabriel Fahrenheit . In the Fahrenheit scale, water freezes at 32  degrees and boils at 212 degrees. 

The centigrade scale, which is also called the Celsius scale, was  developed by Swedish astronomer Andres Celsius. In the centigrade scale,  water freezes at 0 degrees and boils at 100 degrees. 
*/
function cToF(celsius) {
  // this is celsius to Fahrenheit
  fahrenheit = (celsius * 1.8) + 32;
  console.log(celsius + '\xB0C' + ' is ' + fahrenheit + '\xB0F');
}

function fToC(fahrenheit) {
  // this is Fahrenheit to Celsius
  celsius = (5/9) * (fahrenheit - 32)
  console.log(fahrenheit + '\xB0F' + ' is ' + celsius + '\xB0C');
}
cToF(60);
fToC(45);
/* 
Write a function called "computeAverageLengthOfWords".

Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
*/
function computeAverageLengthOfWords(word1, word2) {
  var word1Length = word1.length;
  var word2Length = word2.length;
  var avg1 = word1Length + word2Length;
  var avg2 = avg1/2;
  return(avg2);
  // your code here
} 
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
/*
Write a function called "isEvenAndGreaterThanTen".

Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.
*/
function isEvenAndGreaterThanTen(num) {
  // your code here
  if (num % 2 == 0 && num  > 10) {
			return true;
		} else {
		  return false;
		}
}
/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.
*/
function findMinLengthOfThreeWords(word1, word2, word3) {
  var min = 0;
  if (word1.length <= word2.length && word1.length <= word3.length){
    min = word1.length;
  } else if (word2.length <= word1.length && word2.length <= word3.length){
    min = word2.length;
  } else if (word3.length <= word2.length && word3.length <= word1.length){
    min = word3.length;
  }                     
  return min;
  // your code here
}
findMinLengthOfThreeWords(word1, word2, word3);
/*
Problem:
Write a function called "computeSummationToN".

Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

Notes:
* If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
*/
function computeSummationToN(n) {
  var total = 0;
  for (i = 1; i < n +1; i++) {
  total = total + i;
  }
  return total;
  // your code here
}
var output = computeSummationToN(6);
console.log(output); // --> 21
/*
Write a function called "computeSumBetween".

Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

Notes:
* The sum between 1 and 4 is 1 + 2 + 3 = 6.
* If num2 is not greater than num1, it should return 0.
*/
function computeSumBetween(num1, num2) {
  var total = 0;
  for (i = num1; i < num2; i++) {
// ^ takes I which equals num1 and then stats adding to it as long as it is greater then num2. Remember this as this can be really handy.
  total = total + i;
  }
  return total;
  // your code here
}
var output = computeSumBetween(2, 5);
console.log(output); // --> 9
/*
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.
*/
function countCharacter(str, char) {
  // your code here
  // I need to search the string for the characters and return the number of the characters in the string.
  // 
  var count = 0
  var re = new RegExp(char, 'gi');
  count = (str.match(re)).length;
  return count
  
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
/*
Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
* If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a '+'
* There are is no F+ and there is no F-.
*/
function convertScoreToGradeWithPlusAndMinus(score) {
  if (score >= 98 && score <=100 ) {
    return("A+");
  }
  if (score >= 93 && score <=97 ) {
    return("A");
  }
  if (score >= 90 && score <=93 ) {
    return("A-");
  }
  if (score >= 88 && score <=89 ) {
    return("B+");
  }
  if (score >= 83 && score <=87) {
    return("B");
  }
  if (score >= 80 && score <=83 ) {
    return("B-");
  }
  if (score >= 78 && score <=79 ) {
    return("C+");
  }
  if (score >= 73 && score <=77) {
    return("C");
  }
  if (score >= 70 && score <=73 ) {
    return("C-");
  }
  if (score >= 68 && score <=69 ) {
    return("D+");
  }
  if (score >= 63 && score <=67) {
    return("D");
  }
  if (score >= 60 && score <=63 ) {
    return("D-");
  }
  if (score <= 59 && score >=0) {
    return("F");
  }
  if (score > 100 || score < 0) {
    return("INVALID SCORE");
  }
  
  // your code here
}
var output = convertScoreToGradeWithPlusAndMinus(5);
console.log(output); // --> 'A-'
/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string ("").
* If the array contains no strings; it should return an empty string.
*/
function getLongestWordOfMixedElements(arr) {
  
  var longestword = '';
  for(i=0;i<arr.length;i++) {
    if(arr[i].length > longestword.length) {
      longestword = arr[i];
    }
  }
  return(longestword);
  // your code here
}
var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
/*
Sort these library books by Library ID (smallest number to largest number). You don't need to create a function, but you're welcome to :)

Use a for loop to sort them.
*/
var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Aldous Huxley', title: 'Brave New World', libraryID: 3245},
   { author: 'Stephen Hawking', title: 'A Brief History of Time', libraryID: 8237},
   { author: 'Frank Herbert', title: 'Dune', libraryID: 390},
   { author: 'Herman Hesse', title: 'Siddhartha', libraryID: 2112}
   ];

function libSort(a,b){
  return a.libraryID - b.libraryID;
}
console.log(library.sort(libSort))
/*
Write a JavaScript function which iterates the integers from 1 to n.  
BUT... for multiples of 3 add "Owasso" to the array instead of the number and for the multiples of five, add "Rams" to the array. 

For numbers which are multiples of both three and five print "OwassoRams".
*/

function owassoRams(n){
  var arr = [];
  for (i = 1; i <= n; i++) {
    if (i%3 === 0 && i%5 === 0) {
      arr.push("OwassoRams");
    } else if (i%3 === 0) {
      arr.push("Owasso");
    } else if (i%5 === 0) {
      arr.push("Rams");
    } else {
      arr.push(i);
    }
  }
  return(arr);
}
var output = owassoRams(3);
console.log(output);
