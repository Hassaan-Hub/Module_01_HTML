import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    deleteUser,
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js"

import {
    getFirestore,
    setDoc,
    doc,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBB6sAFnDdjremOYbpB7pSi5RjlYpU9zAc",
    authDomain: "myfirstproject-70e95.firebaseapp.com",
    projectId: "myfirstproject-70e95",
    storageBucket: "myfirstproject-70e95.firebasestorage.app",
    messagingSenderId: "898929202144",
    appId: "1:898929202144:web:601e4b33ea936b4fb59185",
    measurementId: "G-6ZYEPG98DX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// SIGN IN
function signupUser(fullName, email, password, city) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            setDoc(doc(db, "users", user.uid), {
                fullName: fullName,
                email: email,
                city: city,
                id: user.uid
            })
                .then(() => {
                    console.log("--> data successfully added");
                    checkUserStatus();
                })
                .catch((error) => {
                    console.log(error);
                })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}


// LOGIN
function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}


function checkUserStatus() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.pathname, "--> pathname");

            if (window.location.pathname !== "/dashboard.html") {
                window.location = "/dashboard.html"
            }
        } else {
            if (window.location.pathname == "/index.html" ||
                window.location.pathname == "/login.html") {
                console.log("user not login");
            } else {
                window.location = "/login.html"
            }
        }
    });
}


function logout() {
    signOut(auth)
        .then(() => {
            window.location = "/login.html"
        }).catch((error) => {
        });
}


async function getUserSingleData(unqiue) {
    const docRef = doc(db, "users", unqiue);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
}


async function getMutliUsersData() {

    const userArr = [];
    const q = query(collection(db, "users"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // userArr.push(doc.data())
        const user = doc.data()
        userArr.push({
            id: doc.id,
            ...user
        })
    });
    return userArr
}


async function updateUserData(userDeta, uid, collection) {
    try {
        setDoc(doc(db, collection, uid), userDeta)
    } catch (error) {
        console.log(error, "==> error aya hai");

    }
}



async function deleteUserData(user) {
    try {
        await deleteDoc(doc(db, "users", user));
        console.log(user);
    }
    catch (error) {
        console.log(error.message);
    }
}


function authDeleteUser() {
    const user = auth.currentUser;

    deleteUser(user)
        .then(() => {
            console.log("==>>user Delete", user);
        }).catch((error) => {
            console.log("==>>error Delete", error);
        });
}

export {
    signupUser,
    loginUser,
    checkUserStatus,
    logout,
    getUserSingleData,
    getMutliUsersData,
    updateUserData,
    deleteUserData,
    authDeleteUser,
}