import {Row, Col, Container} from "react-bootstrap"
import "./knowledge.css"
import njitLogo from '../img/njitlogo.png'

function Knowledgeleft() {
    return <div id="education" className="k">
        <Container fluid className="k-content">
            <Row>
                <Col>
                    <div className="k-wrapper">
                        <h2 className="k-edu-title">Education</h2>
                        <div className="k-edu-inline">
                            <div className="k-edu-item">
                                <div className="k-logo-item">
                                    <img src={njitLogo} alt="njit logo" className="k-edu-img" />
                                </div>
                                <div className="k-desc-item">
                                    <div className="k-title-item"><h3>Computer Science Bachelors Degree</h3></div>
                                    <div className="k-title-item"><p>Spring 2022 - Fall 2024</p></div>
                                </div>
                            </div>
                            <div className="k-edu-item">
                                <div className="k-logo-item">
                                    <img src={njitLogo} alt="njit logo" className="k-edu-img" />
                                </div>
                                <div className="k-desc-item">
                                    <div className="k-title-item"><h3>Software Development Bootcamp Certification</h3></div>
                                    <div className="k-title-item"><p>Fall 2021 - Spring 2022</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Knowledgeleft;