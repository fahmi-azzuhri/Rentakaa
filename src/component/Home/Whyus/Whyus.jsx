import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import icon_complete from "../../../assets/icons/icon_complete.png";
import icon_price from "../../../assets/icons/icon_price.png";
import icon_24hrs from "../../../assets/icons/icon_24hrs.png";
import icon_professional from "../../../assets/icons/icon_professional.png";

const Whyus = () => {
  return (
    <div className="mb-5">
      <h5 className="fw-bold">Mengapa Kami?</h5>
      <span>Mengapa harus pilih Binar Car Rental?</span>
      <Row className="mt-4">
        <Col lg={3} md={6} sm={12}>
          <Card className="px-3 pt-3">
            <img src={icon_complete} className="w-25 pb-2" alt="" />
            <p className="fw-bold">Mobil Lengkap</p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              temporibus a molestias unde sint nisi!
            </span>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12}>
          {" "}
          <Card className="px-3 pt-3">
            <img src={icon_price} className="w-25 pb-2" alt="" />
            <p className="fw-bold">Harga Murah</p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              temporibus a molestias unde sint nisi!
            </span>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12}>
          {" "}
          <Card className="px-3 pt-3">
            <img src={icon_24hrs} className="w-25 pb-2" alt="" />
            <p className="fw-bold">Layanan 24 Jam</p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              temporibus a molestias unde sint nisi!
            </span>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12}>
          {" "}
          <Card className="px-3 pt-3">
            <img src={icon_professional} className="w-25 pb-2" alt="" />
            <p className="fw-bold">Sopir Professional</p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              temporibus a molestias unde sint nisi!
            </span>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Whyus;
