import { uploadImage } from "./cloudniary.js";
import {
    getMutliUsersData,
    logout,
    updateUserData,
    deleteUserData,
    authDeleteUser,
} from "./firebase.js";

const logoutBtn = document.getElementById("logoutBtn");
let userData = await getMutliUsersData()



logoutBtn.addEventListener("click", () => {
    logout();
})


const userDataHtml = userData.map((data) => {
    return `
    <div class="card" style="width: 18rem;">
    <img src=${data?.profilePic} class="card-img-top" alt="">
    <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">${data.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${data.fullName}</li>
                <li class="list-group-item">${data.firstName}</li>
                <li class="list-group-item">${data.lastName}</li>
                <li class="list-group-item">${data.email}</li>
                <li class="list-group-item">${data.city}</li>
                </ul>
            <div class="card-body">
            <button type="button" class="btn btn-success" id=${data.id}
            data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
            <button class="btn btn-danger" id=${data.id}>Delete</button>
            </div>
            </div>
            `
})

document.getElementById("mainDataContainer").innerHTML = userDataHtml.join("")

let selectedUserDetails;

const fullName = document.getElementById("fullName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const description = document.getElementById("description");
const profilePic = document.getElementById("profilePic");

const body = document.body;

body.addEventListener("click", (e) => {

    if (e.target.innerHTML !== "Update") return;

    const selectedUser = userData.find((user) => user.id === e.target.id);
    selectedUserDetails = selectedUser;
    console.log(selectedUserDetails);



    fullName.value = selectedUser?.fullName || "No fullName provided"
    firstName.value = selectedUser?.firstName || "No firstName provided"
    lastName.value = selectedUser?.lastName || "No lastName provided"
    description.value = selectedUser?.description || "No description provided"
})


const saveChangesBtn = document.getElementById("saveChangesBtn");
const loader = document.getElementById("loader");

saveChangesBtn.addEventListener("click", async () => {
    saveChangesBtn.disabled = true;
    loader.style.display = "block";
    
    // cloudniary code ------------------------------------------>
    const formData = new FormData();

    formData.append('file', profilePic.files[0]);
    formData.append('upload_preset', 'save-practice');
    
    const secure_url = await uploadImage(formData);

    selectedUserDetails.fullName = fullName.value;
    selectedUserDetails.firstName = firstName.value;
    selectedUserDetails.lastName = lastName.value;
    selectedUserDetails.description = description.value;
    selectedUserDetails.profilePic = secure_url;

    console.log("==> after update", selectedUserDetails);


    await updateUserData(selectedUserDetails, selectedUserDetails.id, "users")



    setInterval(() => {
        saveChangesBtn.disabled = false;
        loader.style.display = "none";
        window.location.reload();
    }, 4000)
})


body.addEventListener("click", async (e) => {
    if (e.target.innerHTML !== "Delete") return;

    const userId = e.target.id;
    await deleteUserData(userId)
    window.location.reload();
})


// authDeleteUser();