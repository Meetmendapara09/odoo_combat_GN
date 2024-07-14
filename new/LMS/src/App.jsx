<<<<<<< HEAD
<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import Cart from "./components/Cart";
// import Book from "./components/Book";
// import "./App.css";
=======
import Navbar from "./components/Navbar";
import Cart from "./Components/Cart";
import './App.css';
import Signin from "./_auth/Signin";
>>>>>>> eb83e6bfd42dec4d1bf6f75f2de26351aa0bd07b

// const App = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=javascript");
//         const data = await response.json();
//         setBooks(data.items);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       {/* <Cart /> */}
//       <div className="book-list w-full">
//             {books.map((book) => (
//               <Book key={book.id} book={book} />
//             ))}
//       </div>
//     </>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Book from "./components/Book";
import "./App.css";
import BookDetails from "./Books/BookDetails";
const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=javascript");
        const data = await response.json();
        
        // Check if data.items is an array before setting state
        if (Array.isArray(data.items)) {
          setBooks(data.items);
        } else {
          console.error("Expected data.items to be an array, received:", data.items);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-3 items-center "><BookDetails /></div>
      <div className="flex justify-between ">
      <div className="flex flex-row p-2 w-full justify-between ">
        <div className="book-list w-full">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
        <Cart />
      <div />
    </div>
    </div>
    <Signin></Signin>
=======
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import './App.css';
import SignupLanding from "./SignupLanding";
const App = () => {
// 
  return (
    <>
      <Navbar />
      <Cart/>
      <SignupLanding />
>>>>>>> 250ce17 (finsl commit)
    </>
  );
};
// 
export default App;
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Cart from "./Components/Cart";
// import Signin from "./_auth/Signin";
// import SignupLanding from "./SignupLanding";
// 
// const App = () => {
  // return (<>
    {/* <Router> */}
      {/* <Navbar /> */}
          {/* <Routes> */}
            {/* <Route path="/" element={<Cart />} /> */}
            {/* <Route path="/Signin" element={<Signin />} /> */}
            {/* <Route path="/SignupLanding" element={<SignupLanding />} /> */}
          {/* </Routes> */}
    {/* </Router> */}
    {/* </> */}
  // );
// };
// 
// export default App;

