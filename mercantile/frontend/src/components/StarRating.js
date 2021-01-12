import React from "react";
import {FaStar} from "react-icons/fa";

function Star({selected = false}) {
  return <FaStar color={selected ? "gold" : "lightgrey"}/>;
}

function StarRating({ totalStars = 5 }) {
  return [...new Array(totalStars)].map(
    (_, i) => <Star key={i} selected />
  );
}

export default StarRating;
