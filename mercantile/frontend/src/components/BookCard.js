import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function BookCard({book, bgColor = "bg-color-white"}) {
  return (
      <Card style={{width: "24rem"}} className={`book-card m-4 ${bgColor}`} >
        <Container ><Row className="p-0" >
          <Col className="col-auto p-0" >
            <img className='book-card-cover' src={book.imgUrl} alt='' />
          </Col >
          <Col className="book-details d-flex flex-column justify-content-between pl-4 py-3" >
            <div >
              <h5 >{(book.title.length > 40) ? `${book.title.slice(0, 40).trim()} ...` : book.title}</h5 >
              <p >{book.author}</p >
            </div >
            <div >
              <InputGroup className="" >
                <InputGroup.Prepend >
                  <Button variant="primary" >Add to cart</Button >
                </InputGroup.Prepend >
                <InputGroup.Text >${book.price}</InputGroup.Text >
              </InputGroup >
            </div >
          </Col >
        </Row ></Container >
      </Card >
  );
}
