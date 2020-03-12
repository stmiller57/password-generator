// Assignment Code
var generateBtn = document.querySelector("#generate");

// Code for password length choices
var pwordLength = prompt("How many characters would you like in your password?");
if (pwordLength < 8 || pwordLength > 128) {
  alert("Password length should be 8-128 characters. Please try again.");
  prompt("How many characters would you like in your password?");
}
else {
  alert("You have chosen a password of " + pwordLength + " characters.");
}

// Arrays for lowercase letters, uppercase letters, numbers and special characters
var lower = ["abcdefghijklmnopqrstuvwxyz".split("")];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
var nums = ["0123456789".split("")];
var special = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")];

// Confirms for password characters
var lower = confirm("Would you like lowercase letters in your password?");
var upper = confirm("Would you like uppercase letters in your password?");
var nums = confirm("Would you like numeric characters in your password?");
var special = confirm("Would you like special characters in your password?");

function generatePassword() {
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
