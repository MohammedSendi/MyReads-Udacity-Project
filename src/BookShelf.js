import Book from "./Book";
import propTypes from 'prop-types';

const BookShelf = ({shelf, myBooks, onUpdateBook}) => {

  const pascalToSpaced = (str) => {
    const res = str.replace( /([A-Z])/g, " $1" );
    return res.charAt(0).toUpperCase() + res.slice(1);
  }

  const listOfBooks = myBooks.filter(book => book.shelf === shelf.key);

  return <div className="bookshelf">
    <h2 className="bookshelf-title">{pascalToSpaced(shelf.name)}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {listOfBooks.map(book => (
          <Book key={book.id} book={book} shelf={shelf.key} onUpdateBook={onUpdateBook} />
        ))}
      </ol>
    </div>
  </div>

}
BookShelf.propTypes = {
  onUpdateBook: propTypes.func.isRequired,
  myBooks: propTypes.array.isRequired,
  shelf: propTypes.object.isRequired

}

export default BookShelf;