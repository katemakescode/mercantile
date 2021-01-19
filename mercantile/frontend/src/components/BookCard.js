import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function BookCard({book}) {
  return (
      <Container className="col-md-4 m-4 bg-color-white">
        <Row>
          <Col className="col-md-4 p-0">
              <img className='book-card-cover'
                    src={window.static + 'mercantile/img/anna_karenina.jpg'} alt=''/>
                    {/*src={book.img-url} alt=''/>*/}
          </Col>
          <Col className="pl-0 py-4">
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>${book.price}</p>
          </Col>
        </Row>
      </Container>
  );
}
