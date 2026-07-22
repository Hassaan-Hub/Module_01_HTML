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

const loader = document.getElementById("loader");
const loaderContainer = document.getElementById("loaderContainer");

signupBtn.addEventListener("click", () => {
    loaderContainer.style.display = "flex";
    signupBtn.disabled = true;
    setTimeout(() => {
        signupUser(fullName.value, email.value, password.value, city.value);
        
        loaderContainer.style.display = "none";
        signupBtn.disabled = false;
    }, 4000)
})


getData.addEventListener("click", () => {
    getUserSingleData("AV9hQbxFEhUslMuSU66AzjYgEV72")
})

getMultiData.addEventListener("click", () => {
    getMutliUsersData()
})    