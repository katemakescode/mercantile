import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import BookCard from "./BookCard";

function BookSearchForm() {
  return (
      <InputGroup className="mb-3" >
        <InputGroup.Prepend ><InputGroup.Checkbox /></InputGroup.Prepend >
        <FormControl placeholder="Find a book" />
        <InputGroup.Append ><InputGroup.Text >Search</InputGroup.Text ></InputGroup.Append >
      </InputGroup >
  );
}

function BookSearchResultsList({books}) {
  return (<>
    {books.slice(0, 2).map(
        book => <BookCard key={book.id} book={
          {title: book.volumeInfo.title, author: book.volumeInfo.authors[0]}
        } />
    )}
  </>);
}
BookSearchResultsList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
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
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => response.json())
        .then(response => setItems(response.items))
        .then(() => setIsLoaded(true))
        .catch(setError);
  }, [isLoaded])

  if (error) return <pre>JSON.stringify(error, null, 2)</pre>;
  if (!isLoaded) return <h2>Loading...</h2>;

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
};
