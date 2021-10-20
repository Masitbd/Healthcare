import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ServiceInfo = (props) => {
  const { services } = props;

  const { serviceId } = useParams();

  const findRecord =
    services && services.find((service) => service === serviceId);

  return (
    <Card className="container px-5 py-2">
      <h2>Service no {serviceId}</h2>
      <p>Blood bank</p>
      <p>+00880194001245</p>
      <p>4000 Taka</p>
    </Card>
  );
};

export default ServiceInfo;
