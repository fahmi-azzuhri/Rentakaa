import React from "react";
import { Container, Row } from "react-bootstrap";
import Top from "./Top/Top";
import Service from "./Service/Service";
import Whyus from "./Whyus/Whyus";
import Testimonial from "./Testimonial/Testimonial";
import Faq from "./Faq/Faq";

const Jumbotron = () => {
  return (
    <>
      <Row className="bg-top mb-5">
        <Top />
      </Row>
      <Container>
        <Row>
          <Service />
          <Whyus />
          <Testimonial />
          <Faq />
        </Row>
      </Container>
    </>
  );
};

export default Jumbotron;
