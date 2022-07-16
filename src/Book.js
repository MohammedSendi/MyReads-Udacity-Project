import BookShelfChanger from "./BookShelfChanger"
import propTypes from 'prop-types';

const Book = ({book, shelf, onUpdateBook}) => {
    return <li key={book.id}>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
            `url(${book.imageLinks && book.imageLinks.thumbnail})`,
              
          }}
        ></div>
          <BookShelfChanger book={book} shelf={shelf} onUpdateBook={onUpdateBook}/>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  </li>
}
Book.propTypes = {
  onUpdateBook: propTypes.func.isRequired,
  book: propTypes.object.isRequired
}
export default Book;