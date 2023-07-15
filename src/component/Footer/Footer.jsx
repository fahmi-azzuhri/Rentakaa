import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import img_logo from "../../assets/img/img_logo.png";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <p>Jl. Pondok Ungu Permai no 123 Kota Bekasi 17125</p>
            <p> binarcarrental@example.com</p>
            <p>0812345678911</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <p>Our Services</p>
            <p> Why Us</p>
            <p>Testimonial</p>
            <p>Faq</p>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <p>Terhubung bersama kami</p>
            <div className="d-flex">
              <BsFacebook className="me-4" />
              <BsInstagram className="me-4" />
              <BsTwitter />
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <p>Copyright Binar 2023</p>
            <img src={img_logo} alt="" className="w-75" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
