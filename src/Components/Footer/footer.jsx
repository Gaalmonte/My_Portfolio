import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./footer.css"

function FooterBar() {
    return <div id="contact" className="f">
        <Container fluid className="f-content">
            <Row>
                <Col>
                <div className="f-contact">
                    <h2 className="f-contact-title">Platforms</h2>
                </div>
                </Col>
                <Col>
                <div className="f-contact">
                    <h2 className="f-email">Contact me</h2>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default FooterBar;