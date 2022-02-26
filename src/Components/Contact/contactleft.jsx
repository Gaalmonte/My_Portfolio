import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./contact.css";
import github from "../img/github.svg";

function ContactLeft() {
    return <div  className="c">
        <Container fluid>
            <Row>
                <Col>
                <div className="c-contact-l">
                    <div className="c-item">
                    <h2 className="c-contact-title">Platforms</h2>
                    </div>
                    <div className="c-item">
                    <p className="c-icons">
                    <a href="https://github.com/Gaalmonte" target="blank"><img align="center" src={github} alt="germanaar" height="30" width="40" /></a>
                    <a href="https://linkedin.com/in/germanaalmonte" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="germanaalmonte" height="30" width="40" /></a>
                    </p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default ContactLeft;