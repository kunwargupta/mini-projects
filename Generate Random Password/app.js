const passwordBox = document.querySelector("#password");
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");
const length = 15;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?></-=";

const allCharacters = uppercase + lowercase + numbers + symbols;

generateBtn.addEventListener("click", createPassword);
copyBtn.addEventListener("click", () => {
    passwordBox.select();
    document.execCommand("copy");
})

function createPassword() {
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password +=  allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordBox.value = password;
}

