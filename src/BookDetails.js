import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Book from "./Book";
import BookShelfChanger from "./BookShelfChanger";
import * as BooksAPI from "./BooksAPI";
import {Container, Row, Col} from 'react-bootstrap';

const BookDetails = ({onUpdateBook}) => {

    const { bookID } = useParams();

    const [book, setBook] = useState("");

    useEffect(()=>{
        BooksAPI.get(bookID).then(book => setBook(book))
    },[])
    console.log(book)
    return <Container >
        <Row>
            <Col>
                <Link to='/'>
                    <button className="close-search">
                        return
                    </button>
                </Link>
            </Col>
        </Row>
        <Row>
            <Col md={2} lg={2}>
                <div className="book" >
                    <div className="book-top">
                        <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                            `url(${book.imageLinks && book.imageLinks.thumbnail})`,
                        }}></div>
                        <BookShelfChanger book={book} shelf={book.shelf} onUpdateBook={onUpdateBook}/>
                    </div>
                </div>
            </Col>
            <Col>          
                <div>
                    <h3><b>{book.title}</b></h3>
                    <h5><b>{book.subtitle}</b></h5>
                    <h6>by {book.authors && book.authors.join(', ')}</h6>  
                    <p>published {book.publishedDate}</p>
                    <p>{book.description}</p>
                </div>
            </Col>
        </Row>
    </Container>

}

export default BookDetails;