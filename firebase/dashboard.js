import {
    getMutliUsersData,
    logout,
    updateUserData,
    deleteUserData,
} from "./firebase.js";

const logoutBtn = document.getElementById("logoutBtn");
const userData = await getMutliUsersData()

const userName = document.getElementById("userName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const description = document.getElementById("description");


logoutBtn.addEventListener("click",()=>{
    logout();
})


const userDataHtml = userData.map((data) => {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card’s
                    content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${data.fullName}</li>
                <li class="list-group-item">${data.email}</li>
                <li class="list-group-item">${data.city}</li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-success" id=${data.id}
                data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Update
                </button>
                <button class="btn btn-danger" id=${data.id}>Delete</button>
            </div>
        </div>
    `
})

document.getElementById("mainDataContainer").innerHTML = userDataHtml.join()

let selectedUserDetails;
const body = document.body;

body.addEventListener("click", (e) => {

    if (e.target.innerHTML !== "Update") return;

    const selectedUser = userData.find((user) => user.id === e.target.id)
    selectedUserDetails = selectedUser;
    console.log(selectedUserDetails);
    

    userName.value = selectedUser?.fullName || "No userName provided"
    firstName.value = selectedUser?.firstName || "No firstName provided"
    lastName.value = selectedUser?.lastName || "No lastName provided"
    description.value = selectedUser?.description || "No description provided"
})


const saveChangesBtn = document.getElementById("saveChangesBtn");

body.addEventListener("click", async (e) => {
    if(e.target.innerHTML !== "Delete") return;

    const userId = e.target.id;
    await deleteUserData(userId)
    window.location.reload();
})