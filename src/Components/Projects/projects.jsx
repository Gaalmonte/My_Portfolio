import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import img1 from '../img/example.png'
import "./projects.css"

function Projects() {
    return <div className="p">
        <h2 className="p-title">Projects</h2>
        <Container className="p-container">
            <Row xs={1} md={3}>
                <Col>
                    <Card border="primary" className="mb-3">
                        <Card.Img variant="top" src={img1} alt="project1" />
                        <Card.Body>
                            <Card.Title>Project Title</Card.Title>
                            <Card.Text>
                                A project lore ipsum etc etc idk what else to write honestly
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="primary" size="md">Deployment</Button>
                            </a>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary" className="mb-3">
                        <Card.Img variant="top" src={img1} alt="project1" />
                        <Card.Body>
                            <Card.Title>Project Title</Card.Title>
                            <Card.Text>
                                A project lore ipsum etc etc idk what else to write honestly
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="primary" size="md">Deployment</Button>
                            </a>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary" className="mb-3">
                        <Card.Img variant="top" src={img1} alt="project1" />
                        <Card.Body>
                            <Card.Title>Project Title</Card.Title>
                            <Card.Text>
                                A project lore ipsum etc etc idk what else to write honestly
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="primary" size="md">Deployment</Button>
                            </a>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row xs={1} md={3}>
                <Col>
                    <Card border="primary" className="mb-3">
                        <Card.Img variant="top" src={img1} alt="project1" />
                        <Card.Body>
                            <Card.Title>Project Title</Card.Title>
                            <Card.Text>
                                A project lore ipsum etc etc idk what else to write honestly
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="primary" size="md">Deployment</Button>
                            </a>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary" className="mb-3">
                        <Card.Img variant="top" src={img1} alt="project1" />
                        <Card.Body>
                            <Card.Title>Project Title</Card.Title>
                            <Card.Text>
                                A project lore ipsum etc etc idk what else to write honestly
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="primary" size="md">Deployment</Button>
                            </a>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary" className="mb-3">
                        <Card.Img variant="top" src={img1} alt="project1" />
                        <Card.Body>
                            <Card.Title>Project Title</Card.Title>
                            <Card.Text>
                                A project lore ipsum etc etc idk what else to write honestly
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="primary" size="md">Deployment</Button>
                            </a>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Projects;