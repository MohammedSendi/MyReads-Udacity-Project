import { Link } from "react-router-dom";
import propTypes from 'prop-types';
import Book from "./Book";
import { useState } from "react";

const SearchBook = ({searchBooks, myBooks, onSearch, onResetSearch, onUpdateBook}) => {

  const[mysearch,setMysearch] = useState("");

  const handleChange = event => {
    const val = event.target.value;
    setMysearch(val);
    onSearch(val);
  };

  const updatedBooks = searchBooks.map(book => {
    myBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });

  
  return <div className="search-books">
    <div className="search-books-bar">
      <Link to='/'>
        <button className="close-search" onClick={onResetSearch}>
          Close
        </button>
      </Link>
      <div className="search-books-input-wrapper">
        <input
          onChange={handleChange}
          type="text"
          value={mysearch}
          placeholder="Search by title, author, or ISBN"
          autoFocus
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
      {updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : "none"}
            onUpdateBook={onUpdateBook}
          />
        ))}
      </ol>
    </div>
  </div>
}

SearchBook.propTypes = {
  onUpdateBook: propTypes.func.isRequired,
  onSearch: propTypes.func.isRequired,
  onResetSearch: propTypes.func.isRequired,
  searchBooks: propTypes.array.isRequired,
  myBooks: propTypes.array.isRequired,
}

export default SearchBook;