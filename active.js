

//start exe one from here 
function areAnagrams(string1, string2) {
  // Convert the strings to lowercase and remove any whitespace
  string1 = string1.toLowerCase().replace(/\s/g, '');
  string2 = string2.toLowerCase().replace(/\s/g, '');

  // Check if the lengths of the strings are different
  if (string1.length !== string2.length) {
    return false;
  }

  // Create character frequency maps for both strings
  const charCount = {};

  for (let char of string1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of string2) {
    if (!charCount[char]) {
      // If a character in string2 is not found in string1,
      // they are not anagrams
      return false;
    }
    charCount[char]--;
  }

  // Check if all character counts are zero
  for (let count of Object.values(charCount)) {
    if (count !== 0) {
      return false;
    }
  }

  // If all checks pass, the strings are anagrams
  return true;
}

    
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
  console.log("The strings are anagrams.");
} else {
  console.log("The strings are not anagrams.");
}

//end exe one here

//start exe two from here

function sliceArray(arr, start, end) {
  // Check if start and end indices are valid
  if (start < 0 || start >= arr.length || end < start || end > arr.length) {
    return [];
  }

  // Use the slice method to extract the elements between the indices
  return arr.slice(start, end);
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const startIndex = 2;
const endIndex = 7;

const slicedArray = sliceArray(array, startIndex, endIndex);
console.log(slicedArray);
//end exe two here

//start exe three from here
function splitStringIntoWords(str) {
  // Use regular expression to split the string into words
  const words = str.split(/\s+/);

  return words;
}


const string = "Hello, world! This is a sample string.";
const wordsArray = splitStringIntoWords(string);
console.log(wordsArray);


//end exe three here

//start exe four from here 

function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}


const dateOfBirth = "1990-05-15";
const age = calculateAge(dateOfBirth);
console.log(age);
//end exe four here 
//start exe five here 

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


const email = "test@example.com";
const isValid = isValidEmail(email);
console.log(isValid);
//end exe 5 here



//start exe 6 from here 

function replaceSubstring(str, substring, replacement) {
  return str.split(substring).join(replacement);
}


const originalString = "Hello, world! Hello, OpenAI!";
const substring = "Hello";
const replacement = "Hi";

const modifiedString = replaceSubstring(originalString, substring, replacement);
console.log(modifiedString);


//end exe 6 here

//start exe 7 from here

function findSecondSmallest(array) {
  if (array.length < 2) {
    return null; // No second smallest value exists
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      secondSmallest = smallest;
      smallest = array[i];
    } else if (array[i] < secondSmallest && array[i] !== smallest) {
      secondSmallest = array[i];
    }
  }

  if (secondSmallest === Infinity) {
    return null; // No second smallest value found
  }

  return secondSmallest;
}

const numbers = [5, 2, 8, 1, 9, 3, 6];
const secondSmallest = findSecondSmallest(numbers);
console.log(secondSmallest);

// end exe 7 here


//start exe 8 from here

function findArrayDifference(array1, array2) {
  const difference = [];

  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      difference.push(array1[i]);
    }
  }

  return difference;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];
const differenceArray = findArrayDifference(array1, array2);
console.log(differenceArray);


//end exe 8 here

//start exe 9 from here 

function formatTimeDuration(durationInSeconds) {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  const formattedDuration = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  return formattedDuration;
}


const durationInSeconds = 3665;
const formattedDuration = formatTimeDuration(durationInSeconds);
console.log(formattedDuration);


//end exe 9 here


//start exe 10 from here

function convertToCamelCase(str) {
  const words = str.toLowerCase().split(" ");

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join("");
}


const inputString = "hello world how are you";
const camelCaseString = convertToCamelCase(inputString);
console.log(camelCaseString);

//end exe 10 here