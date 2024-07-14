import React from "react";

function Navbar() {
  return (
    <>
      <nav className="w-full flex justify-between mt-3 border-black">
        <div className="ml-3 flex gap-3">
          <img
            className="w-10 h-10 rounded-md"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg"
          ></img>
          <h1 className="text-2xl">Title</h1>
        </div>
        <button className=" w-20 mr-6 p-2 bg-red-400 border-3 border-red-800 rounded">
          Login
        </button>
      </nav>
    </>
  );
}

export default Navbar;
