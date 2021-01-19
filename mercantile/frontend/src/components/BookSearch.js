import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import BookCard from "./BookCard";
import BookSearchForm from "./BookSearchForm";

export default function BookSearch() {
  return (
      <Container fluid as="section" id="booksearch" className="py-5 bg-color-light" >
        <Row className="my-4 justify-content-center" >
          <h1 >Books for Book Lovers</h1 >
        </Row >
        <Row className="mt-4 mb-3 justify-content-center" >
          <Col md="auto" ><BookSearchForm /></Col >
        </Row >
      </Container >
  );
}
