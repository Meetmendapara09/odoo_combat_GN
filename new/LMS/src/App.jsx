import Navbar from "./components/Navbar";
import Cart from "./Components/Cart";
import './App.css';
import Signin from "./_auth/Signin";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart/>
    <div className="App">
      <header className="App-header">
      </header>
      <main></main>
    </div>
    <Signin></Signin>
    </>
  );
};

export default App;
