import React, {useEffect, useState} from "react";

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

function SearchBookCard({book}) {
  return (
      <div className="card col-md-2 mx-4 mx-md-4 my-4 pt-3" >
        <a href="https://en.wikipedia.org/wiki/Anna_Karenina" >
          <div className="card-body m-0" >
            <img className="card-img-top"
                 alt="Cover of the 2000 Modern Library edition of Anna Karenina by Leo Tolstoy"
                 src={window.static + 'mercantile/img/anna_karenina.jpg'} />
            <h5 className="card-title pt-3" >{book.etag}</h5 >
            <p className="card-text" >{book.id}</p >
          </div >
        </a >
      </div >
  );
}

function BookSearchResultsList({query}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // API key AIzaSyDh4Ha95ti7GLkVbPKdyXuoowEXOgRVHak
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => response.json())
        .then(response => setItems(response.items));
    setIsLoaded(true);
  }, [])

  if (items) {
    return (<>
      {items.slice(0, 2).map(book => <SearchBookCard key={book.id} book={book} />)}
    </>);
  }
}

export default function BookSearch() {
  return (
      <Container fluid as="section" id="booksearch" className="py-5 bg-color-light" >
        <Row className="my-4 justify-content-center" >
          <h3 >Books for Book Lovers</h3 >
        </Row >
        <Row className="my-4 justify-content-center" >
          <Col md="auto" ><BookSearchForm /></Col >
        </Row >
        <Row className="justify-content-center" >
          <BookSearchResultsList query={'cats'} />
        </Row >
      </Container >
  );
};
