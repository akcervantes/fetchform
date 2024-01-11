"use strict";

// esconder y mostrar modulo de form

const addContactBtn = document.querySelector(".addContact--btn");
const signUpForm = document.querySelector(".sectionSignUp");
const hideModule = document.querySelector(".hideModule");
const showModule = document.querySelector(".showModule");

addContactBtn.addEventListener("click", function (event) {
  if (signUpForm.classList.contains("hideModule")) {
    signUpForm.classList.remove("hideModule");
    signUpForm.classList.add("showModule");
  } else {
    signUpForm.classList.remove("showModule");
    signUpForm.classList.add("hideModule");
  }
});
