import { useState } from 'react';
import { fetchBookByISBN, fetchBookByTitle } from '../services/googleBooksAPI';
import './BookDetails.css';

const BookDetails = () => {
  const [query, setQuery] = useState('');
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');
  const [searchType, setSearchType] = useState('isbn'); // Default to ISBN

  const handleFetchBook = async () => {
    setError('');
    setBook(null);
    try {
      let fetchedBook;
      if (searchType === 'isbn') {
        fetchedBook = await fetchBookByISBN(query);
      } else {
        fetchedBook = await fetchBookByTitle(query);
      }

      if (fetchedBook) {
        setBook(fetchedBook);
      } else {
        setError('Book not found');
      }
    } catch (err) {
      setError('An error occurred while fetching the book');
    }
  };

  return (
    <div className="book-details-container">
      <div className="search-box">
        <select 
          value={searchType} 
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="isbn">ISBN</option>
          <option value="title">Title</option>
        </select>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder={`Enter ${searchType === 'isbn' ? 'ISBN' : 'Title'}`} 
        />
        <button onClick={handleFetchBook}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {book && (
        <div className="book-card">
          <div className="book-info">
            <h3>{book.volumeInfo.title}</h3>
            <p><strong>Author:</strong> {book.volumeInfo.authors.join(', ')}</p>
            <p><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
            <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
            <p><strong>Description:</strong> {book.volumeInfo.description}</p>
          </div>
          <div className="book-actions">
            <button className="rent-button">Rent this Book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
