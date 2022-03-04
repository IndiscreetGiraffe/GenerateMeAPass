// Assignment code here
var confirmLower;
var confirmUpper;
var confirmNumbers;
var confirmSpecial;
var amount;
var choice;
//special characters and other input for password
lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
special = ["!","@","#","$","%","^","&","*","(",")","_","+","=",";",":"];

//Generate Password code
function generatePassword() {
  amount = prompt("How many characters are going to be in your password? Choose between 8 and 128 characters.");
  //first if to start user validation
  if (!amount) {
    alert("Please enter a number to continue");
  } else if (amount <8 || amount > 128) {
    alert("Choose a number between 8 and 128 for your password.");
  } else {
    confirmLower = confirm("Will this password have lowercase letters in it?");
    confirmUpper = confirm("Will this password have uppercase letters in it?");
    confirmNumbers = confirm("Will this password have numbers in it?");
    confirmSpecial = confirm("Will this password have any special characters in it?");
  };
  if (confirmLower) {
    choice = lower;
  }
  else if (confirmUpper) {
    choice = upper;
  }
  else if (confirmNumbers) {
    choice = numbers;
  }
  else if (confirmSpecial) {
    choice = special;
  }
  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
