
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//prompting user



    //number character


    let numberCharacter = parseInt(prompt('How many character would you like your password be?')); //parseInt to make the variable a number and not a string


    
    while ((numberCharacter <10) || (numberCharacter >62)) {
      

      numberCharacter = parseInt(prompt('You need between 10 and 62 characters for your password'));
  }

  console.log(numberCharacter);
 


  let arrayCharacter = ['']; //empty array to add all the type characters chosen by the user
  
  let penalty = 0; //variable to add penalty if user does not select a type of characters

// Function to prompt user for password options
function getPasswordOptions(name, chosenArray) {

  specify = confirm('Would you like your passworde to inlcude ' + name + '?');

 if(specify === false){

  penalty = penalty + 1.1;

  console.log(penalty);

  while (penalty >4) { //while loop to prompt user again if he did not choose any type of characters
    penalty = 0;
    alert('Please select at least one character type')
    allTogetherParam();
    }


} else if(specify === true){

  penalty = 0;

  arrayCharacter = arrayCharacter.concat(chosenArray);

}


}

allTogetherParam(); 

function allTogetherParam() {

getPasswordOptions('special characters', specialCharacters);
getPasswordOptions('numeric characters', numericCharacters);
getPasswordOptions('lower cases characters', lowerCasedCharacters);
getPasswordOptions('upper cases characters', upperCasedCharacters);
  
}



let randomNumber = []; // empty array to place all the random characters to make the password


// Function for getting a random element from an array
function getRandom(arr) {

  arr = arrayCharacter[Math.floor(Math.random() * arrayCharacter.length)];

  return randomNumber.push(arr);
 

}


 for (let i = 0; i < (numberCharacter); i++) { // loop to select the number of character selected by the user
  
   getRandom();
  
  
 }

console.log(randomNumber);






// Function to generate password with user input
function generatePassword() {

  let passwordGenerated = ''; // empty string variable to generate the password from the array without space in between

    for (let i = 0; i < randomNumber.length; i++) { //loop to go through the array to append all the character without separator or space
      const character = randomNumber[i];

      passwordGenerated += character;
      
    }

    return passwordGenerated


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);