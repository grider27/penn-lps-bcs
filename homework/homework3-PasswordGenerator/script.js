// Assignment Code
var generateBtn = document.querySelector("#generate");

//define global variables for password generation
var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUpper = alphabetLower.map(
  function (alphabetLower) {
    return alphabetLower.toUpperCase();
  }
  );
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


function generatePassword() {
  // Get user password length preference
  var passwordLength = prompt("How long would you like the password? (Please pick between 8-128 characters)");
  passwordLength = parseInt(passwordLength) || 0; // Not allow blank
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your selected password length is not supported. Please pick between 8 to 128");
    return generatePassword();
  }

  // Confirm character types to use
  alert("Great. You have requested a password that will be " +passwordLength+" in length. Now Let's confirm the type of characters you would like to use. Please make sure you select atleast one");
  wantlowerCase = confirm("Do you want to include a lowercase letter?");
  wantupperCase = confirm("Do you want to include a uppercase letter?");
  wantNumbers = confirm("Do you want to include numbers?");
  wantspecialChar = confirm("Do you want to include a special character?");

  if (!wantlowerCase && !wantupperCase && !wantNumbers && !wantspecialChar) {
    alert("Please select atleast one type of characters. Lets try again.");
    return generatePassword();
  }

  //Clear password and define password array for random password to generate from
  var password = "";
  var userPasswordarr = [];

  if (wantlowerCase) {
    userPasswordarr = userPasswordarr.concat(alphabetLower);
  }

  if (wantupperCase) {
    userPasswordarr = userPasswordarr.concat(alphabetUpper);
  }

  if (wantNumbers) {
    userPasswordarr = userPasswordarr.concat(numbers);
  }

  if (wantspecialChar) {
    userPasswordarr = userPasswordarr.concat(specialChar);
  }

  //generate password
  for (i = 0; i < passwordLength; i++) {
    randomDigit = (Math.floor(Math.random() * userPasswordarr.length));
    password += userPasswordarr[randomDigit];
  }

return password;

}

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
