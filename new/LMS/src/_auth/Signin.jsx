import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import 'tailwindcss/tailwind.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`${user.email} Login successfully!!!`);
        setIsLoggedIn(true);
        window.location.replace("welcome.html");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      alert('Sign-out successful.');
      setIsLoggedIn(false);
    }).catch((error) => {
      alert('An error happened.');
    });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert(`${user.email} Login successfully!!!`);
        setIsLoggedIn(true);
        window.location.replace("welcome.html");
      }).catch((error) => {
        alert(error.message);
      });
  };

  const handleForgotPassword = () => {
    auth.sendPasswordResetEmail(email)
      .then(() => {
        alert("Reset link sent to your email id");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="btn btn-logout">Logout</button>
        ) : (
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input 
                type="text" 
                id="email" 
                className="mt-2 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-gray-600" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input 
                type="password" 
                id="password" 
                className="mt-2 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-gray-600" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 text-right">
              <button type="button" onClick={handleForgotPassword} className="text-blue-500 hover:underline">Forgot password?</button>
            </div>
            <div className="mb-4">
              <button 
                type="button" 
                onClick={handleLogin} 
                className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
              >
                Login
              </button>
            </div>
            <div className="mb-4 text-center">
              <hr className="my-4" />
              <button 
                type="button" 
                onClick={handleGoogleLogin} 
                className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                <svg className="mr-2" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                Sign in with Google
              </button>
            </div>
            <div className="text-center">
              <p>Not a member? <a href="./signup.html" className="text-blue-500 hover:underline">Register now</a></p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Signin;
