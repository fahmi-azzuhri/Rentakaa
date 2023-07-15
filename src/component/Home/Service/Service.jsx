import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img_service from "../../../assets/img/img_service.png";
const Service = () => {
  return (
    <div className="mb-5">
      <Container>
        <Row>
          <Col lg={6} sm={12} className="pt-2">
            <img src={img_service} className="w-75" alt="" />
          </Col>
          <Col lg={6} sm={12} className="pt-2">
            <h5 className="fw-bold">
              Rental Mobil Terbaik untuk segala jenis perjalanan di Bekasi!
            </h5>
            <span className="justify-content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              aperiam vel dolor, illum perferendis a sunt odit voluptate iusto
              possimus quam, saepe quas dolore nobis inventore ea laboriosam
              aspernatur ducimus.
            </span>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                id!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
                deleniti.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
                voluptate!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                explicabo!
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque, unde.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
