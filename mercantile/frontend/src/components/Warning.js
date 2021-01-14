import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import StarRating from "./StarRating";


export default function Warning() {
  const [weather, setWeather] = useState('sunny');

  function handleClick() {
    setWeather((weather === 'sunny') ? 'rainy' : 'sunny');
  }

  return (
    <section className="d-flex py-5 bg-color-light text-center justify-content-center" >
      <div className="col col-md-9 mx-auto" >
        <h3 >WARNING</h3 >
        <h5 className="text my-4 px-1" >
          This bookstore, despite appearances, sells no books.
        </h5 >
        <div ><StarRating /></div >
        <Button onClick={handleClick} variant="outline-primary" className="mt-4" >
          {weather}
        </Button >
      </div >
    </section >
  );
}
