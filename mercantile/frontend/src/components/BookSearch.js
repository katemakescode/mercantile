import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import BookCard from "./BookCard";
import BookSearchForm from "./BookSearchForm";

function BookSearchResultsList({books}) {
  return (<>{books.filter(book => book.saleInfo.retailPrice).slice(0, 2).map(book =>
      <BookCard key={book.id} book={{
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        price: book.saleInfo.retailPrice.amount,
        imgUrl: "http://books.google.com/books/content?id=H7fdPHxAIS0C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70_fSxExXbgGGyy6AVyYYSuTHSvFT8YX20703cxhEZn4I9B5EgMRcNDZDRTBI1ZjDuB-qCX5ufOdn1mTQ48f-ayLtStmk89-P0gxqJQLiO9oxINP2UTKg4TRrC05-WC-s406F71&source=gbs_api"
      }} />
  )}</>);
}
BookSearchResultsList.propTypes =
    {
      books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        volumeInfo: PropTypes.shape({
          title: PropTypes.string,
          authors: PropTypes.arrayOf(PropTypes.string)
        }).isRequired
      })).isRequired
    };


function BookSearchResults({query}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!query) return;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&country=US&filter=paid-ebooks`)
        .then(response => response.json())
        .then(response => setItems(response.items))
        .then(() => setIsLoaded(true))
        .catch(setError);
  }, [isLoaded])

  if (error) return <pre >JSON.stringify(error, null, 2)</pre >;
  if (!isLoaded) return <h2 >Loading...</h2 >;

  if (items) {
    return (
        <BookSearchResultsList books={items} />
    );
  }
}

export default function BookSearch() {
  return (
      <Container fluid as="section" id="booksearch" className="py-5 bg-color-light" >
        <Row className="my-4 justify-content-center" >
          <h1 >Books for Book Lovers</h1 >
        </Row >
        <Row className="my-4 justify-content-center" >
          <Col md="auto" ><BookSearchForm /></Col >
        </Row >
        <Row className="book-list justify-content-center" >
          <BookSearchResults query={'cats'} />
        </Row >
      </Container >
  );
}
