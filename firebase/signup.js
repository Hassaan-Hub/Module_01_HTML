import {
    signupUser,
    checkUserStatus,
    getUserSingleData,
} from "./firebse.js";

checkUserStatus();

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const city = document.getElementById("city");
const signupBtn = document.getElementById("signupBtn");
const getData = document.getElementById("getData");

signupBtn.addEventListener("click", () => {
    signupUser(fullName.value, email.value, password.value, city.value);
})


getData.addEventListener("click", () => {
    getUserSingleData("AV9hQbxFEhUslMuSU66AzjYgEV72")
})    