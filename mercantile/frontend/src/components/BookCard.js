import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function BookCard({book, bgColor="bg-color-white"}) {
  return (
      <Card className={`book-card col-md-4 m-4 ${bgColor}`}>
        <Row>
          <Col className="col-md-auto p-0">
              <img className='book-card-cover' src={book.imgUrl} alt=''/>
          </Col>
          <Col className="pl-4 py-4">
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>${book.price}</p>
          </Col>
        </Row>
      </Card>
  );
}
