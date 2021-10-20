import React from "react";

const Review = (props) => {
  const { name } = props.service;
  return <div>{name}</div>;
};

export default Review;
