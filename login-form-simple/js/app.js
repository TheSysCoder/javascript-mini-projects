"use strict";

// global variable declaration

const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;
const loginBtn = document.querySelector(".btn");
const defaultUser = "admin@admin.com";
const defaultPass = "admin123";

loginBtn.addEventListener("click", function (e) {
  if (email === "" && password === "") {
    alert("Please enter username and password");
  } else if (password != defaultPass && email != defaultUser) {
    alert("please validate username and password");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  } else {
    alert(`Welcome ${defaultUser}`);
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
  e.preventDefault();
});
