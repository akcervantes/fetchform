"use strict";

//select seccion contactos

const sectionContacts = document.querySelector(".contactsContainer");

//funcion elemnt from html

function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}

////loading module

const loadModal = document.querySelector(".modal");
const loadOverlay = document.querySelector(".overlay");

const hideModal = function () {
  loadModal.classList.add("hidden");
  loadOverlay.classList.add("hidden");
};
const showModal = function () {
  loadModal.classList.remove("hidden");
  loadOverlay.classList.remove("hidden");
};

//funcion render users

const renderUserData = function (arr) {
  arr.forEach((element) => {
    //datos de usuario para row

    const name = element.first_name + " " + element.last_name;
    const email = element.email;
    const avatar = element.avatar;

    //crear row

    const contactRow = document.createElement("div");
    contactRow.innerHTML = `<div class="profileContainer">
    <img class="profileAvatar" src=${avatar}>
    <span class="profileName">${name}</span>
    <p class="profileEmail">${email}</p>
    </div>`;

    //agregar row al html

    sectionContacts.appendChild(contactRow);
  });
};

//crear array usuarios

let userData = [];

//fetch data

const getContacts = function () {
  showModal();

  fetch("https://reqres.in/api/users?delay=4")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((object) => {
      console.log(object.data);

      return object.data;
    })
    .then((data) => {
      userData = Array.from(data);
      // console.log(userData);

      hideModal();
      renderUserData(userData);
    })
    .catch((error) => console.log("error"));
};

//get contacts boton
const getContactsBtn = document.querySelector(".getContacts");
getContactsBtn.addEventListener("click", getContacts);

//add contact form

const inputFirstName = document.querySelector(".firstNameQ");
const inputLastName = document.querySelector(".lastNameQ");
const inputEmail = document.querySelector(".emailAdressQ");

//submit contacts to form

const btnSubmitForm = document.querySelector(".btnSubmit");

const formSubmit = function () {
  const newUser = {
    first_Name: inputFirstName.value,
    last_Name: inputLastName.value,
    email: inputEmail.value,
    avatar: "none",
  };
  console.log(newUser);
  renderUserData(newUser);
};

btnSubmitForm.addEventListener("click", formSubmit);
