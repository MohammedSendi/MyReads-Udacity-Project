import "./App.css";
import { useState, useEffect  } from "react";
import BookList from "./BookList";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router";
import SearchBook from "./SearchBook";
import { debounce } from 'throttle-debounce';

function App() {
  
  const bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
  ];

  const [myBooks, setMyBooks] = useState([]);
 
  const [searchBooks, setSearchbooks] = useState([]);

  const onUpdateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)

    let updatedBooks = [];
    updatedBooks = myBooks.filter(b => b.id !== book.id);
    book.shelf = shelf;
    updatedBooks = updatedBooks.concat(book);
    setMyBooks(updatedBooks);
  } 


  const searchForBooks = debounce(300, false, query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          setSearchbooks([]);
        } else {
          setSearchbooks(books);
        }
      });
    } else {
      setSearchbooks([]);
    }
  });

  const onResetSearch = () => {
    setSearchbooks([] );
  };


  //  get all books in a user shelfs
  useEffect(() => {
    BooksAPI.getAll().then((books)=>{
      setMyBooks(books);
    });
    
  },[]);

  return (
    <Routes>
        <Route
          exact path="/"
          element={      
            <BookList bookShelves={bookshelves} myBooks={myBooks} onUpdateBook={onUpdateBook}/>
          }
        />
        <Route
          path="/search"
          element={
            <SearchBook searchBooks={searchBooks} myBooks={myBooks} onUpdateBook={onUpdateBook} onSearch={searchForBooks} onResetSearch={onResetSearch}/>
          }
        />
    </Routes>
  );
}

export default App;
