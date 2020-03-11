// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for lowercase letters, uppercase letters, numbers and special characters
var lower = ["abcdefghijklmnopqrstuvwxyz".split("")];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
var nums = ["0123456789".split("")];
var special = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);