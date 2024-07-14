/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase"; // Adjust the path as needed
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("User logged in:", user);
        navigate("/welcome"); // Use navigate for routing
      } else {
        setUser(null);
        console.log("No user logged in");
      }
    });

    return () => unsubscribe();
  }, [navigate]); // Add navigate to the dependency array

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      alert(`${userCredential.user.email} Login successfully!!!`);
      navigate("/welcome"); // Use navigate for routing
    } catch (error) {
      console.error("Sign-in error:", error.message);
      alert(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
      alert(`${userCredential.user.email} Signup successfully!!!`);
      navigate("/welcome"); // Use navigate for routing
    } catch (error) {
      console.error("Sign-up error:", error.message);
      alert(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Sign-out successful.");
      alert("Sign-out successful.");
    } catch (error) {
      console.error("Sign-out error:", error.message);
      alert(error.message);
    }
  };

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User logged in with Google:", result.user);
      alert(`${result.user.email} logged in with Google successfully!`);
      navigate("/welcome"); // Use navigate for routing
    } catch (error) {
      console.error("Google login error:", error.message);
      alert(error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email to reset your password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Reset link sent to your email.");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">{isNewUser ? "Sign Up" : "Sign In"}</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          {isNewUser ? (
            <button
              type="button"
              onClick={handleSignUp}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-4"
            >
              Sign Up
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSignIn}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-4"
            >
              Sign In
            </button>
          )}
          <button
            type="button"
            onClick={handleSignOut}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mb-4"
          >
            Sign Out
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 mb-4"
          >
            Login with Google
          </button>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          >
            Forgot Password
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            {isNewUser ? "Already have an account?" : "Don't have an account?"}
            <button
              type="button"
              onClick={() => setIsNewUser(!isNewUser)}
              className="text-blue-500 ml-1"
            >
              {isNewUser ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
