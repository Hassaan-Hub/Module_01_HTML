import {
    loginUser,
    checkUserStatus,
} from "./firebse.js";

checkUserStatus();

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", () => {
    loginUser(email.value, password.value);
})