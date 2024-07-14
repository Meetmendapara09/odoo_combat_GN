import React from "react";
import Navbar from "./Component/Navbar";
import Cart from "./components/Cart";
import BookDetails from './Books/BookDetails';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Cart/>
    <div className="App">
      <header className="App-header">
        <h1>Library Management System</h1>
      </header>
      <main>
      </main>
    </div>
    </>
  );
};

export default App;
