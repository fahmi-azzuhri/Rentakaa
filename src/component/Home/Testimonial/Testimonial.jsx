import React, { useState } from "react";
import CardTestimonial from "./CardTestimonial";
import testimonials from "../../../data.json";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <h5 className="text-center fw-bold">Testimonial</h5>
      <p className="text-center mb-5">
        Berbagai ulasan positif dari pelanggan kami
      </p>
      <CardTestimonial
        activeIndex={activeIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Testimonial;
