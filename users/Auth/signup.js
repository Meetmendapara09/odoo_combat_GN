import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";


const firebaseConfig = {
        apiKey: "AIzaSyAWDj26y_gIE4-Y7dqXbA3ECyEDcSJU4-Y",
        authDomain: "odoo-f2f87.firebaseapp.com",
        projectId: "odoo-f2f87",
        storageBucket: "odoo-f2f87.appspot.com",
        messagingSenderId: "974181498130",
        appId: "1:974181498130:web:6668aa9a80bdd14bbbc7cb",
        measurementId: "G-DFGBG91YQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

console.log(app);

document.getElementById("register").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert("Registration successfully!!");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
            alert(error);
        });
});


//----- Logout code start
document.getElementById("logout").addEventListener("click", function () {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        alert('Sign-out successful.');
        document.getElementById('logout').style.display = 'none';
    }).catch((error) => {
        // An error happened.
        console.log('An error happened.');
    });
});
//----- End
firebase.initializeApp(firebaseConfig);

document.getElementById('login1').addEventListener('click', GoogleLogin)
document.getElementById('logout1').addEventListener('click', LogoutUser)
document.getElementById('logout2').addEventListener('click', logout)

let provider = new firebase.auth.GoogleAuthProvider()

function GoogleLogin() {
    console.log('Login Btn Call')
    firebase.auth().signInWithPopup(provider).then(res => {
        console.log(res.user)
        document.getElementById('LoginScreen').style.display = "none"
        document.getElementById('dashboard').style.display = "block"
        showUserDetails(res.user)
    }).catch(e => {
        console.log(e)
    })
}


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html");
    }
})

function LogoutUser() {
    console.log('Logout Btn Call')
    firebase.auth().signOut().then(() => {
        document.getElementById('LoginScreen').style.display = "block";
        document.getElementById('dashboard').style.display = "none";
    }).catch(e => {
        console.log(e)
    })
}

checkAuthState()
