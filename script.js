// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return "Your password goes here!";
}

// Arrays for lowercase letters, uppercase letters, numbers and special characters
var lower = ["abcdefghijklmnopqrstuvwxyz".split("")];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
var nums = ["0123456789".split("")];
var special = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")];

var passwordlength = prompt("How many characters do you want in your password?");
var minlength = 8
var maxlength = 128
if (minlength <= passwordlength <= maxlength) {
  confirm("You have chosen an acceptable password length")
}
else {
  alert("Your password needs to be between 8-128 characters")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);