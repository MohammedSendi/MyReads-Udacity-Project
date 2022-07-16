import propTypes from 'prop-types';
import { useState} from "react";

const BookShelfChanger = ({onUpdateBook, shelf, book}) => {

  const [myshelf,setMyshelf]=useState(shelf);

  const handleChangeShelf = event => {
    setMyshelf( event.target.value );
    onUpdateBook(book, event.target.value);
  };

  let hasShelf = book['shelf'] ? false : true

  return <div className="book-shelf-changer">
    <select onChange={handleChangeShelf} value={book.shelf}>
      <option value="none" defaultValue disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none"  hidden={hasShelf} >None</option>
    </select>
  </div>
}
BookShelfChanger.propTypes = {
  onUpdateBook: propTypes.func.isRequired,
  book: propTypes.object.isRequired
}
export default BookShelfChanger;