// Assignment Code
var generateBtn = document.querySelector("#generate");
// Function to generate password
function generatePassword() {
  // variables for generate password function
  var password = "";
  var charSet = "";
  var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numSet = "0123456789";
  var specialSet = "#@!%&^()/";
  // Password length
  var options = prompt("How many characters do you want in your password?");
  parseInt(options, 10)
  if (options < 8 || options > 128) {
    alert("Password length should be 8-128 characters. Please try again.");
    prompt("How many characters do you want in your password?");
  }
  else {
    alert("You have chosen a password of " + options + " characters.");
  }
  // Select character types used in password
  var lower = confirm("Would you like lowercase letters in your password?");
  if (lower === true) {
    charSet = charSet + lowerCaseSet;
  }
  var upper = confirm("Would you like uppercase letters in your password?");
  if (upper === true) {
    charSet = charSet + upperCaseSet;
  }
  var nums = confirm("Would you like numeric characters in your password?");
  if (nums === true) {
    charSet = charSet + numSet;
  }
  var special = confirm("Would you like special characters in your password?");
  if (special === true) {
    charSet = charSet + specialSet;
  }
  // For loop to generate random characters for password
  for (var i = 0; i < options; i++) {
    var password = password + charSet[Math.floor(Math.random() * charSet.length)];
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
