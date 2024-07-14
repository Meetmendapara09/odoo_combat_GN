import BookDetails from './Books/BookDetails';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Library Management System</h1>
      </header>
      <main>
        <BookDetails />
      </main>
    </div>
  );
};

export default App;
