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
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("signin.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+ user.email
        showUserDetails(user)
    }
})

document.getElementById('logout').addEventListener('click', Logout)
function Logout() {
    console.log('Logout Btn Call')
    firebase.auth().signOut().then(() => {
        alert('Sign-out successful.');
    }).catch(e => {
        console.log(e)
    })
}

function showUserDetails(user) {

    document.getElementById('userDetails').innerHTML = `
<img src="${user.photoURL}" style="width:10%">
<p>Name: ${user.username}</p>
<p>Email: ${user.email}</p>
`
document.getElementById('email').value = `${user.email}`

const userId = user.uid;

                const storageRef = firebase.storage().ref('users/'+userId+'/profile');

                    storageRef.getDownloadURL().then(function(url) {
                        
                        const img = document.getElementById('profile-photo');
                        img.src = url;
                        
                    });

}

function checkAuthState() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            showUserDetails(user)
        } 
    })
}
checkAuthState()
