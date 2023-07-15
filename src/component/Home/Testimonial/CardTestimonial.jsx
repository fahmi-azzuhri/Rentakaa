import React from "react";
import img_photo from "../../../assets/img/img_photo.png";
import testimonials from "../../../data.json";
import { Card, Row, Col } from "react-bootstrap";
import ButtonTestimonial from "./ButtonTestimonial";

const CardTestimonial = ({ activeIndex, handleNext, handlePrev }) => {
  const nextIndex = (activeIndex + 1) % testimonials.length;

  return (
    <div className="testimonial-container">
      <Row>
        <Col>
          <Card className="bg-testi border-0">
            <div className="d-flex">
              <img src={img_photo} alt="" className="px-4 py-2" />
              <div className="flex-column pt-2 px-2">
                <h6>{testimonials[activeIndex].name}</h6>
                <p>{testimonials[activeIndex].review}</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="bg-testi border-0">
            <div className="d-flex">
              <img src={img_photo} alt="" className="px-4 py-2" />
              <div className="flex-column pt-2 px-2">
                <h6>{testimonials[nextIndex].name}</h6>
                <p>{testimonials[nextIndex].review}</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <ButtonTestimonial handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default CardTestimonial;
