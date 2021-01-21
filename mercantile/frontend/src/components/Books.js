import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import BookSearchForm from "./BookSearchForm";
import BookSearch from "./BookSearch";

export default function Books() {
  const [query, setQuery] = useState('');

  const onSearch = (queryTerm) => {
    setQuery(queryTerm);
  }

  return (<>
      <Container fluid as="section" id="book-search" className="py-5 bg-color-light" >
        <Row className="my-4 justify-content-center" >
          <h1 >Books for Book Lovers</h1 >
        </Row >
        <Row className="mt-4 mb-3 justify-content-center" >
          <Col md="auto" ><BookSearchForm onSearch={onSearch}/></Col >
        </Row >
      </Container >

      <Container fluid as="section" id="book-results" className="py-5 mb-0" >
        <Row className="justify-content-center" >
          <h3 >{(query) ? query.toUpperCase() : 'CLASSICS'}</h3 >
        </Row >
        <Row className="book-list align-items-center justify-content-center" >
          <BookSearch query={query} />
        </Row >
      </Container >
  </>);
}
