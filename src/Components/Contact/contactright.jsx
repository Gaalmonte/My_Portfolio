import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./contact.css";
import github from "../img/github.svg";

function ContactRight() {
    return <div id="contact" className="f">
        <Container fluid className="f-content">
            <Row>
                <Col>
                <div className="f-contact-r">
                    <div className="f-item">
                    <h2 className="f-contact-title">Shoot me a message</h2>
                    </div>
                    <div className="f-item">
                    <p className="f-icons">
                    <a href="https://instagram.com/germanaar" target="blank"><img align="center" src={github} alt="germanaar" height="30" width="40" /></a>
                    <a href="https://linkedin.com/in/germanaalmonte" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="germanaalmonte" height="30" width="40" /></a>
                    </p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default ContactRight;