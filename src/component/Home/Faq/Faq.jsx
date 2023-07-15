import React from "react";
import { Col, Row } from "react-bootstrap";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <>
      <Row className="mb-5">
        <Col lg={4} sm={12}>
          <h5 className="fw-bold pb-2">Pertanyaan yang sering diajukan</h5>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            tempora repellendus officiis
          </span>
        </Col>
        <Col lg={8} sm={12}>
          <FaqAccordion />
        </Col>
      </Row>
    </>
  );
};

export default Faq;
