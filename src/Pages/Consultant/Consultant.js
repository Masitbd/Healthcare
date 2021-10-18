import React from "react";
import "./Consultant.css";

const Consultant = (props) => {
  console.log(props);
  const { name, position, img, degree } = props.consultant;
  return (
    <div>
      <div className="display-card">
        <img src={img} alt="" height="200" width="100%" />
        <p>Name: {name}</p>
        <p>{position}</p>
        <p>{degree}</p>
        <button className="btn-regular">More</button>
      </div>
    </div>
  );
};

export default Consultant;
