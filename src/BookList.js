import BookShelf from "./BookShelf"; 
import propTypes from 'prop-types';
import { Link } from "react-router-dom";

const BookList = ({bookShelves, myBooks, onUpdateBook}) => {
  
  return <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
        {bookShelves.map(shelf => (
          <BookShelf 
            key={shelf.key}
            shelf={shelf}
            myBooks={myBooks}
            onUpdateBook={onUpdateBook}/>
        ))}
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
}

BookList.propTypes = {
  bookShelves: propTypes.array.isRequired,
  onUpdateBook: propTypes.func.isRequired,
  myBooks: propTypes.array.isRequired
}

export default BookList;