// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import Cart from "./components/Cart";
// import Book from "./components/Book";
// import "./App.css";

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
    </>
  );
};

export default App;
