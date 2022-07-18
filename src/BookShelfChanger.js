import propTypes from 'prop-types';
import { useState} from "react";

const BookShelfChanger = ({onUpdateBook, shelf, book}) => {

  const [myshelf,setMyshelf]=useState(shelf);

  const handleChangeShelf = event => {
    setMyshelf( event.target.value );
    onUpdateBook(book, event.target.value);
  };

  return <div className="book-shelf-changer">
    <select onChange={handleChangeShelf} value={myshelf}>
      <option disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
}
BookShelfChanger.propTypes = {
  onUpdateBook: propTypes.func.isRequired,
  book: propTypes.object.isRequired
}
export default BookShelfChanger;