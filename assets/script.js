// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = '!@#$%^&*<>,.;:/()-=+[]'
var numbers = '0123456789'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower = 'abcdefghijklmnopqrstuvwxyz'
var passwordOptions = '' 

function generatePassword() {
  var charLength = prompt("How many characters would you like your password to contain?")
  if (charLength < 128 && 8 > charLength) {
    alert("Your password must be between 8 and 128") 
    return generatePassword()
  } 
  console.log(charLength)
  var special = confirm("Click OK to confirm including special characters")
  if (special == true) {
    passwordOptions += specialCharacters;
  }
  console.log(special)
  var num = confirm("Click OK to confirm including numbers")
  if (num == true) {
    passwordOptions += numbers;
  }
  console.log(num)
  var up = confirm("Click OK to confirm including upper case letters")
  if (up == true) {
    passwordOptions += upper;
  }
  console.log(up)
  var low = confirm("Click OK to confirm including lower case letters")
  if (low == true) {
    passwordOptions += lower;
  }
  console.log(low)

  var password = "";
  for (var i = 0; i < charLength; i++) {
    password += passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
  }
  console.log(password);
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordEl = document.createElement("textarea");
  passwordEl.setAttribute("readonly", "");
  passwordEl.setAttribute("class", "form-control");
  passwordEl.setAttribute("id", "passwordDisplay");
  passwordEl.textContent = password;
  passwordText.appendChild(passwordEl);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
