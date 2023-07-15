import React from "react";
import { Container, Row } from "react-bootstrap";
import Top from "./Top/Top";
import Service from "./Service/Service";
import Whyus from "./Whyus/Whyus";
import Testimonial from "./Testimonial/Testimonial";
import Faq from "./Faq/Faq";
import Footer from "../Footer/Footer";

const Jumbotron = () => {
  return (
    <>
      <Top />
      <Container>
        <Row>
          <Service />
          <Whyus />
          <Testimonial />
          <Faq />
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default Jumbotron;
