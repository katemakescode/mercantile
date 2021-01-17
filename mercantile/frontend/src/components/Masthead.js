import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import StarRating from "./StarRating";

function BookSearchForm() {
  return (
      <InputGroup className="mb-3" >
        <InputGroup.Prepend ><InputGroup.Checkbox /></InputGroup.Prepend >
        <FormControl placeholder="Find a book" />
        <InputGroup.Append ><InputGroup.Text >Search</InputGroup.Text ></InputGroup.Append >
      </InputGroup >
  );
}

export default function Masthead() {
  return (
      <Container fluid as="section" id="masthead" className="py-5 bg-color-light text-center" >
        <h2 className="my-4" >Books for Book Lovers</h2 >
        <Row className="my-4 justify-content-center" >
          <Col md="auto" ><BookSearchForm /></Col >
        </Row >
      </Container >
  );
};
