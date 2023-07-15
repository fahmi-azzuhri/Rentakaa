import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import img_car from "../../../assets/img/img_car.png";
import NavBar from "../../Navbar/NavBar";
import { useNavigate } from "react-router-dom";

const Top = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Row className="bg-top mb-5">
        <Col lg={6} sm={12} className="ps-4">
          <div className="mt-5 ">
            <h2>Sewa dan Rental Mobil Terbaik di Bekasi</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quo modi dolore molestiae sunt, placeat maiores excepturi
              repellendus harum expedita reiciendis alias quis accusamus! Ea.
            </span>
            <Button
              className="bg-success d-block mt-3"
              onClick={() => navigate("/searchcar")}>
              Mulai Sewa Mobil
            </Button>
          </div>
        </Col>
        <Col lg={6} sm={12}>
          <img src={img_car} alt="" className="w-100" />
        </Col>
      </Row>
    </>
  );
};

export default Top;
