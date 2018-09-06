import React from "react";

const Rating = ({ count }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      stars.push(<span key={i}>★</span>);
    } else {
      stars.push(<span key={i}>☆</span>);
    }
  }
  return <div>{stars}</div>;
};

export default Rating;
