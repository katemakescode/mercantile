import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StarRating from "./StarRating";


export default function Warning() {
  const [weather, setWeather] = useState('sunny');

  useEffect(() => {
    console.log(`The weather is currently ${weather}`);
  }, [weather]);

  function handleClick() {
    setWeather((weather === 'sunny') ? 'rainy' : 'sunny');
  }

  return (
      <Container fluid as="section" id="warning" className="py-5 bg-color-light text-center" >
        <h3 >WARNING</h3 >
        <h5 className="my-4 px-1" >
          This bookstore, despite appearances, sells no books.
        </h5 >
        <Row >
          <Col ><StarRating /></Col >
        </Row >
        <Row >
          <Col >
            <Button onClick={handleClick} variant="outline-primary" className="mt-4" >{weather}</Button >
          </Col >
        </Row >
      </Container >
  );
}
