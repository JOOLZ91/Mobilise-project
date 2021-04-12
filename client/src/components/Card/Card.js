import React, { useState } from "react";
import useForm from "./useForm";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Modal from "../Modal/modal";

export const Card = () => {
  const { handleChange, handleFocus, handleSubmit, values } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen === true) {
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }
  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
            <div className="creditCard">
              <p className="details">Card Details</p>
              <p className="info">Card Type</p>
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
              />
            </div>
            <Form onSubmit={handleSubmit}>
              <p className="infoCard">Name on Card</p>
              <Form.Group>
                <Form.Control
                  className="inputForm"
                  type="text"
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="John Smith"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </Form.Group>
              <p className="infoCard">Card Number</p>
              <Form.Group>
                <Form.Control
                  className="inputForm"
                  type="number"
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="**** **** **** ****"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </Form.Group>
              <Row>
                <Col>
                  <p className="infoCard">Expiration date</p>
                  <Form.Group>
                    <Form.Control
                      className="inputForm"
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="MM/YY"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <p className="infoCard">CVC</p>
                  <Form.Group>
                    <Form.Control
                      className="inputForm"
                      type="number"
                      id="cardSecurityCode"
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="XXX"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                onClick={() => setIsOpen(true)}
                size={"block"}
                data-testid="validateButton"
                id="validateButton"
                type="submit"
              >
                Check Out
              </Button>
              <Modal open={isOpen} />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
