const passwordBox = document.getElementById("password");
const length = 10;

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789"
const symbols = "@#$%^&*()_+~<>/-=";

const allChars = upper + lower + symbols + num;

function createPassword(){
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += num[Math.floor(Math.random() * num.length)];

    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}