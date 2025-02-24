// Firebase-konfigurasjon (erstatte med din egen config)
const firebaseConfig = {
  apiKey: "AIzaSyDBkeQCqNfCu0ljtSjcXcCODoUULpXDU2Y",
  authDomain: "romaskin-logg.firebaseapp.com",
  projectId: "romaskin-logg",
  storageBucket: "romaskin-logg.firebasestorage.app",
  messagingSenderId: "533818186243",
  appId: "1:533818186243:web:0b00c8d42aa95636db0c36",
  measurementId: "G-32NQF8FXS7"
};

// Initialiser Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Login
const loginButton = document.getElementById("loginBtn");
const logoutButton = document.getElementById("loginBtn");
const userInfo = document.getElementById("user-info");
const userName = document.getElementById("user-name");

loginButton.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            userName.textContent = `Velkommen, ${user.displayName}`;
            userInfo.style.display = "block";
        })
        .catch((error) => {
            console.error(error.message);
        });
});

logoutButton.addEventListener("click", () => {
    auth.signOut()
        .then(() => {
            userInfo.style.display = "none";
        })
        .catch((error) => {
            console.error(error.message);
        });
});

auth.onAuthStateChanged((user) => {
    if (user) {
        userName.textContent = `Velkommen, ${user.displayName}`;
        userInfo.style.display = "block";
    } else {
        userInfo.style.display = "none";
    }
});
