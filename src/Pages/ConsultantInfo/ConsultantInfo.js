import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ConsultantInfo = () => {
  const { consultentId } = useParams();
  return (
    <Card className="container px-5 py-2">
      <h3>This is consultant info {consultentId}</h3>
      <p>Name: DR. MD. HOSNE MOBARAK</p>
      <p>Lead consultant</p>
      <p>MBBS, DLO, MCPS (ENT)</p>
    </Card>
  );
};

export default ConsultantInfo;
