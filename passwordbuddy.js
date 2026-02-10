const userInput = document.getElementById("userInput");
const strengthFiller = document.getElementById("strengthFiller");
const strengthText = document.getElementById("strengthText");

const lenRule = document.getElementById("lenRule");
const numRule = document.getElementById("numRule");
const upperRule = document.getElementById("upperRule");
const specialRule = document.getElementById("specialRule");

const showBtn = document.getElementById("showBtn");

// SHOW / HIDE PASSWORD 
showBtn.addEventListener("click", function () {
  if (userInput.type === "password") {
    userInput.type = "text";
    showBtn.textContent = "Hide";
  } else {
    userInput.type = "password";
    showBtn.textContent = "Show";
  }
});

// CHECKING PASSWORD 
//.oninput IS EVENT HANDLER WHICH RUN IMMEDIATELY WHILE TYPING......
userInput.oninput = function () {
  const password = userInput.value;
  let count = 0;

  //lengthRule
  if (password.length >= 8) {
    lenRule.style.color = "green";
    count++;
  } else {
    lenRule.style.color = "red";
  }

  //NumberRule
  if (/[0-9]/.test(password)) {
    numRule.style.color = "green";
    count++;
  } else {
    numRule.style.color = "red";
  }

  //UpperRule
  if (password !== password.toLowerCase()) {
    upperRule.style.color = "green";
    count++;
  } else {
    upperRule.style.color = "red";
  }

  //SpecialCharacters
  if (/[!@#$]/.test(password)) {
    specialRule.style.color = "green";
    count++;
  } else {
    specialRule.style.color = "red";
  }

  //STRENGTH BAR RESULT HERE
  if (count <= 1) {
    strengthText.textContent = "Weak";
    strengthText.style.color = "red";
    strengthFiller.style.width = "30%";
    strengthFiller.style.background = "red";
  } 
  else if (count === 2 || count === 3) {
    strengthText.textContent = "Medium";
    strengthText.style.color = "orange";
    strengthFiller.style.width = "60%";
    strengthFiller.style.background = "orange";
  } 
  else {
    strengthText.textContent = "Strong";
    strengthText.style.color = "green";
    strengthFiller.style.width = "100%";
    strengthFiller.style.background = "green";
  }
};
