import {
    signupUser,
    checkUserStatus,
    getUserSingleData,
    getMutliUsersData,
} from "./firebase.js";


const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const city = document.getElementById("city");
const signupBtn = document.getElementById("signupBtn");
const getData = document.getElementById("getData");
const getMultiData = document.getElementById("getMultiData");

signupBtn.addEventListener("click", () => {
    signupUser(fullName.value, email.value, password.value, city.value);
})


getData.addEventListener("click", () => {
    getUserSingleData("AV9hQbxFEhUslMuSU66AzjYgEV72")
})    

getMultiData.addEventListener("click", () => {
    getMutliUsersData()
})    