import { Link, Navigate, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import SignupLanding from "../SignupLanding"; // Import SignupLanding

function Navbar() {
  // const navigate = useNavigate(); // Initialize useNavigate

  // const handleLoginClick = () => {
    // navigate("SignupLanding"); // Programmatically navigate to SignupLanding
  // };

  return (
    <>
      <nav className="w-full flex justify-between mt-3 border-black">
        <div className="ml-3 flex gap-3">
          <img
            className="w-10 h-10 rounded-md"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg"
            alt="Logo"
          />
          <Link to="/">
            <h1 className="text-2xl font-semibold">Title</h1>
          </Link>
        </div>
        <h1 className="text-2xl font-bold">Library Management System</h1>
       <Navigate to="/SignupLanding" <button
          onClick={handleLoginClick}
          className="w-20 mr-1 p-2 bg-red-400 border-3 border-red-800 rounded"
        >
          Login
        </button>
      </nav>
      <hr className="mt-2 border-2 border-x-zinc-400" />
    </>
  );
}

export default Navbar;
