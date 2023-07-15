import React from "react";
import { Button } from "react-bootstrap";

const ButtonTestimonial = ({ handleNext, handlePrev }) => {
  return (
    <div className="text-center mt-3 mb-5">
      <Button className="testimonial-nav me-2" onClick={handlePrev}>
        Prev
      </Button>
      <Button className="testimonial-nav" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default ButtonTestimonial;
