import { getMutliUsersData, logout } from "./firebase.js";



const getData = await getMutliUsersData()

const userDataHtml = getData.map((data) => {
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
        </div>
    `
})

document.getElementById("mainDataContainer").innerHTML = userDataHtml.join()