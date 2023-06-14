let button = document.querySelector(".button");
let firstname = document.querySelector(".firstname input");
let lastname = document.querySelector(".lastname input");
let Email = document.querySelector(".Email input");
let password = document.querySelector(".password input");

button.onclick = function() {
  if (firstname.value === "") {
    document.querySelector(".errorTextf").style.display = "block" ;
    firstname.style.borderColor = "red";
  }

  if (lastname.value === "") {
    document.querySelector(".errorTextl").style.display = "block";
    lastname.style.borderColor = "red";
  }

  if (Email.value === "") {
    document.querySelector(".errorTexte").style.display = "block";
    Email.style.borderColor = "red";
  }

  if (password.value === "") {
    document.querySelector(".errorTextp").style.display = "block";
    password.style.borderColor = "red";
  }
};
