import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookCard from "./BookCard";

function ClassicsBookList({books = []}) {
  return (
      books.slice(0,2).map(book => <BookCard key={book.id} book={book} />)
  );
}

export default function Classics({books = []}) {
  return (
      <Container fluid as="section" id="classics" className="py-5" >
        <Row className="justify-content-center" >
          <h3 >CLASSICS</h3 >
        </Row >
        <Row className="justify-content-center" >
          <ClassicsBookList books={books} />
        </Row >
      </Container >
  );
}
