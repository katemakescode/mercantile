import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

function Star({selected = false, onSelect = f => f}) {
  return <FaStar color={selected ? "gold" : "grey"} onClick={onSelect} />;
}

export default function StarRating({totalStars = 5}) {
  const [selectedStars, setSelectedStars] = useState(3);

  return [...new Array(totalStars)].map((_, i) => (
          <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}/>
      )
  );
}
