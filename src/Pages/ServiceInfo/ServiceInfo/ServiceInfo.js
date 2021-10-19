import React from "react";
import { useParams } from "react-router-dom";

const ServiceInfo = () => {
  const { consultentId } = useParams();
  return (
    <div>
      <h2>This is service info {consultentId}</h2>
    </div>
  );
};

export default ServiceInfo;
