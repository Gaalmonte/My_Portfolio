import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./contact.css";

function ContactRight() {
    return <div className="c">
        <Container fluid>
            <Row>
                <Col>
                <div className="c-contact-r">
                    <div className="c-title">
                    <h2 className="c-email">Contact me</h2>
                    </div>
                    <div className="c-item">
                        <form className="my-form">
                            <div className="container">
                            <ul>
                                <li>
                                <div className="grid">
                                <input type="text" placeholder="Name" required/>
                                </div>
                                <div className="grid">
                                <input type="email" placeholder="Email" name="user_email" required/>
                                </div>
                                </li>
                                <li>
                                <textarea placeholder="Message"></textarea>
                                </li>
                                <li>
                                <div className="grid grid-3">
                                <div className="required-msg">REQUIRED FIELDS</div>
                                <button className="btn-grid" type="submit" value="Send">
                                <span className="back">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt=""/>
                                </span>
                                <span className="front">SUBMIT</span>
                                </button>
                                <button className="btn-grid" type="reset">
                                <span className="back">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt=""/>
                                </span>
                                <span className="front">RESET</span>
                                </button>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </form>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default ContactRight;