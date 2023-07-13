import React from "react";
import { Button, Col } from "react-bootstrap";

const Top = () => {
  return (
    <>
      <Col lg={6} sm={12}>
        <div className="mt-5">
          <h2>Sewa dan Rental Mobil Terbaik di Bekasi</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo
            modi dolore molestiae sunt, placeat maiores excepturi repellendus
            harum expedita reiciendis alias quis accusamus! Ea.
          </span>
          <Button className="bg-success d-block mt-3">Mulai Sewa Mobil</Button>
        </div>
      </Col>
      <Col lg={6} sm={12}></Col>
    </>
  );
};

export default Top;
