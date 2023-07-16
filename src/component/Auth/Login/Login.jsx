import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import img_logo from "../../../assets/img/img_logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-top">
      <Row className="vh-100 align-items-center justify-content-center mx-3 ">
        <Col lg={6} sm={12}>
          <img
            src={img_logo}
            alt=""
            className="w-50 mb-4 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h3 className="fw-bold mb-4">Welcome Back!</h3>

          <Form.Group controlId="formLoginEmail" className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="masukkan email"></Form.Control>
          </Form.Group>
          <Form.Group controlId="formLoginPassword" className="mb-4">
            <Form.Label>Kata Sandi</Form.Label>
            <Form.Control
              type="password"
              placeholder="masukkan kata sandi"></Form.Control>
          </Form.Group>
          <Button className="bg-primary w-100 mb-5">Masuk</Button>
          <div className="d-flex align-items-center justify-content-center">
            <p className="me-3">Tidak mempunyai akun?</p>
            <p
              className="text-primary cursor-pointer"
              onClick={() => navigate("/register")}>
              Daftar sekarang
            </p>
          </div>
        </Col>
        <Col
          lg={6}
          className="align-items-center justify-content-center bg-top">
          <img
            src="https://fleetxtribe.com/assets/images/car-rental-booking-software.png"
            className="auth-image w-100"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
