import React from "react";
import { Carousel } from "react-bootstrap";

const Header = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21202.jpg"
          alt="First slide"
          height="400px"
          weight="100%"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/surgeons-interacting-with-each-other-operation-room_1170-2283.jpg"
          alt="Second slide"
          height="400px"
          weight="100%"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/empty-stomatology-orthodontist-bright-office-room-with-nobody-it_482257-15349.jpg"
          alt="Third slide"
          height="400px"
          weight="100%"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
