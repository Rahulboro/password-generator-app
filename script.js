const passwordBox = document.querySelector("#password");
const passwordLength = 14;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let charechter = "!@#$%^&*()_+{}|[]-=";
let copyimage = document.getElementById("copyPassword");
const generatedPassword = upperCase + lowerCase + number + charechter;

function generate() {
  let passwordinput = "";
  passwordinput += upperCase[Math.floor(Math.random() * upperCase.length)];
  passwordinput += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  passwordinput += number[Math.floor(Math.random() * number.length)];
  passwordinput += charechter[Math.floor(Math.random() * charechter.length)];

  while (passwordLength > passwordinput.length) {
    passwordinput +=
      generatedPassword[Math.floor(Math.random() * generatedPassword.length)];
  }
  passwordBox.value = passwordinput;
}
copyimage.addEventListener("click", () => {
  let copyPassword = passwordBox.value;
  navigator.clipboard.writeText(`${copyPassword}`);
  alert(`password ${copyPassword}has been copied to clipboard!`);
});
