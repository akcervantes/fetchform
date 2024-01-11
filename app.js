"use strict";

//select seccion contactos

const sectionContacts = document.querySelector(".contactsContainer");

//funcion elemnt from html

function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}

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

fetch("https://reqres.in/api/users")
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
    renderUserData(userData);
  })
  .catch((error) => console.log("error"));
