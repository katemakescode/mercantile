import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function BookCard({book, bgColor = "bg-color-white"}) {
  return (
      <Card className={`book-card col-md-4 m-4 ${bgColor}`} >
        <Row >
          <Col className="col-md-auto p-0" >
            <img className='book-card-cover' src={book.imgUrl} alt='' />
          </Col >
          <Col className="pl-4 py-3" >
            <h5 >{(book.title.length > 40) ? `${book.title.slice(0, 40).trim()} ...` : book.title}</h5 >
            <p >{book.author}</p >
            <InputGroup className="mt-3 pt-3">
              <InputGroup.Prepend >
                <Button variant="primary" >Add to cart</Button >
              </InputGroup.Prepend >
              <InputGroup.Text >${book.price}</InputGroup.Text >
            </InputGroup >
          </Col >
        </Row >
      </Card >
  );
}
