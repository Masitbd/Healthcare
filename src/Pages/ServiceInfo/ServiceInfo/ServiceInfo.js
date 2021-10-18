import React from "react";
import { useParams } from "react-router-dom";

const ServiceInfo = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>This is service info {serviceId}</h2>
    </div>
  );
};

export default ServiceInfo;
<h2>This is service info</h2>;
