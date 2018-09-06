import React from "react";
import "./styles.css";

const RatingFilter = ({ onChangeRating = () => {} }) => (
  <div className="rating">
    <span id={5} onClick={() => onChangeRating(5)}>
      ☆
    </span>
    <span id={4} onClick={() => onChangeRating(4)}>
      ☆
    </span>
    <span id={3} onClick={() => onChangeRating(3)}>
      ☆
    </span>
    <span id={2} onClick={() => onChangeRating(2)}>
      ☆
    </span>
    <span id={1} onClick={() => onChangeRating(1)}>
      ☆
    </span>
  </div>
);

export default RatingFilter;
