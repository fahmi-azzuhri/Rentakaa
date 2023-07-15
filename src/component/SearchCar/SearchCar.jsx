import React, { useState, useEffect } from "react";
import Top from "../Home/Top/Top";
import Footer from "../Footer/Footer";
import {
  Card,
  Form,
  Button,
  Container,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchCar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [passengerCount, setPassengerCount] = useState(1);
  const [selectedPassengerCount, setSelectedPassengerCount] = useState(1);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleIncrement = () => {
    setPassengerCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (passengerCount > 1) {
      setPassengerCount((prevCount) => prevCount - 1);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleSaveModal = () => {
    setSelectedPassengerCount(passengerCount);
    setShowModal(false);
  };

  return (
    <>
      <Top />
      <Container style={{ position: "relative", zIndex: "2", top: "-150px" }}>
        <Card>
          <Row className="d-flex px-5 py-3">
            <Col sm={6}>
              <div className="flex-column me-4">
                <p>Tipe Driver</p>
                <Form.Group controlId="typeDriver">
                  <Form.Control as="select">
                    <option value="lepas kunci">
                      Tanpa sopir (Lepas kunci)
                    </option>
                    <option value="sopir">Dengan sopir</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </Col>
            <Col sm={6}>
              <div className="flex-column me-4">
                <p>Tanggal</p>
                <DatePicker
                  className="form-control"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select date"
                />
              </div>
            </Col>

            <Col sm={6}>
              <div className="flex-column me-4 pt-2">
                <p>Waktu Jemput/Ambil</p>
                <Form.Group controlId="timePickup">
                  <Form.Control as="select">
                    <option value="8">08.00 WIB</option>
                    <option value="9">09.00 WIB</option>
                    <option value="10">10.00 WIB</option>
                    <option value="11">11.00 WIB</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </Col>
            <Col sm={6}>
              <div className="flex-column me-4 pt-2">
                <p>Jumlah Penumpang</p>
                <Form.Group controlId="passenger">
                  <Form.Control
                    as="select"
                    onClick={handleOpenModal}
                    value={selectedPassengerCount}
                    onChange={(e) =>
                      setSelectedPassengerCount(parseInt(e.target.value))
                    }>
                    <option value={selectedPassengerCount}>
                      {selectedPassengerCount} {"Penumpang"}
                    </option>
                  </Form.Control>
                </Form.Group>
              </div>
            </Col>
            <Button className="bg-success border-0 mt-3">Cari Mobil</Button>
          </Row>
        </Card>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Jumlah Penumpang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center">
            <Button
              variant="secondary"
              className="me-2"
              onClick={handleDecrement}>
              -
            </Button>
            <p className="mb-0">{passengerCount}</p>
            <Button
              variant="secondary"
              className="ms-2"
              onClick={handleIncrement}>
              +
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
};

export default SearchCar;
