// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength = " "
var symbols = "!@#$%&*()_+-=[]|,./?><";
var num = 123456789
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"

// var choice = []
// console.log(choice.length)

// // console.log(choice.length)
// var allSelected = symbols + num + upper + lower;
// var randPasswordArray = Array(charLength);
// randPasswordArray[0] = symbols
// randPasswordArray[1] = num
// randPasswordArray[2] = upper
// randPasswordArray[3] = lower
// randPasswordArray = randPasswordArray.fill(allSelected, 4);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    if (charLength >= 8 && charLength <= 128) {
        console.log(charLength.value);
        charLength = " ";

    } else {
        charLength = prompt("How many characters would you like your password to contain?");
        alert("You chose " + charLength);
        if (charLength < 8 || charLength > 128) {
            alert("Invalid. Password must contain between 8 and 128 characters.");
            // alert("You chose " + charLength);

            generatePassword();

        }
        specialCharacter = confirm("Click OK to confirm including special characters.");
        alert("Special characters selected");
        if (specialCharacter) {
            // choice.push(symbols[0]);
            console.log(symbols + "yes");
        } else {
            return;
        }
        numericCharacters = confirm("Click OK to confirm including numeric characters.");
        alert("Numeric characters selected");
        if (numericCharacters) {
            // choice.push(num);
            console.log(num.length);
        } else {
            return;
        }
        upperCase = confirm("Click OK to confirm including uppercase characters.");
        alert("Uppercase characters selected");
        if (upperCase) {
            // choice.push(upper[2]);
            console.log(upper + "yes");
        } else {
            return;
        }
        lowerCase = confirm("Click OK to confirm including lowercase characters.");
        alert("Lowercase characters selected");
        if (lowerCase) {
            // choice.push(lower[3]);
            console.log(lower + "yes");
        } else {
            return;
        }
        generatePassword()
    }
}