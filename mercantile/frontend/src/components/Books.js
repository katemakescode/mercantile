import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import BookSearchForm from "./BookSearchForm";
import BookSearchFetch from "./BookSearchResults";

export default function Books() {
  return (<>
      <Container fluid as="section" id="booksearch" className="py-5 bg-color-light" >
        <Row className="my-4 justify-content-center" >
          <h1 >Books for Book Lovers</h1 >
        </Row >
        <Row className="mt-4 mb-3 justify-content-center" >
          <Col md="auto" ><BookSearchForm /></Col >
        </Row >
      </Container >

      <Container fluid as="section" id="classics" className="py-5 mb-3" >
        <Row className="justify-content-center" >
          <h3 >CLASSICS</h3 >
        </Row >
        <Row className="book-list justify-content-center" >
          <BookSearchFetch query={'cats'} />
        </Row >
      </Container >
  </>);
}