import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import HoverVideoPlayer from 'react-hover-video-player';
import superchat from '../img/superchat.mp4';
import phasergame from '../img/phasergame.mp4';
import weatherapi from '../img/weatherapi.mp4';
import restrant from '../img/restrant.mp4';
import reactamole from '../img/reactamole.mp4';
import breakoutgame from '../img/breakoutgame.mp4';

import "./projects.css"

function Projects() {
    return <div id="projects" className="p">
        <Container className="p-container">
        <h2 className="p-title">Projects</h2>
            <Row xs={1} md={3}>
                <Col>
                    <Card border="primary" className="mb-3">
                    <HoverVideoPlayer
                    videoSrc={superchat}
                    loadingOverlay={
                        <div className="loading-overlay">
                        <div className="loading-spinner" />
                        </div>}
                    />
                        <Card.Body>
                            <Card.Title>Super Chat</Card.Title>
                            <Card.Text>
                                Chat in real time with React and Firebase, Authenticates the user with Google.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://react-firebasesuperchat.herokuapp.com/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="primary" size="md" className="Button1">Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/Chat-Application"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md" className="Button1">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary" className="mb-3">
                    <HoverVideoPlayer
                    videoSrc={phasergame}
                    loadingOverlay={
                        <div className="loading-overlay">
                        <div className="loading-spinner" />
                        </div>}
                    />
                        <Card.Body>
                            <Card.Title>2D Dungeon Crawler</Card.Title>
                            <Card.Text>
                                Utilizing Javascript and Phaser 3 a classmate and I started collaborating on our own project.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="disabled" size="md" className="Button1">Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/Phaser-Game"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md"className="Button1" >Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary" className="mb-3">
                    <HoverVideoPlayer
                    videoSrc={weatherapi}
                    loadingOverlay={
                        <div className="loading-overlay">
                        <div className="loading-spinner" />
                        </div>}
                    />
                        <Card.Body>
                            <Card.Title>Weather API</Card.Title>
                            <Card.Text>
                                Built a page that calls upon an API using React to deliver the weather of city chosen.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="disabled" size="md"className="Button1" >Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/RR-React-SPA-Project"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md"className="Button1" >Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row xs={1} md={3}>
                <Col>
                    <Card border="primary" className="mb-3">
                    <HoverVideoPlayer
                    videoSrc={restrant}
                    loadingOverlay={
                        <div className="loading-overlay">
                        <div className="loading-spinner" />
                        </div>}
                    />
                        <Card.Body>
                            <Card.Title>Restaurant Restrant</Card.Title>
                            <Card.Text>
                                Built using Express, Nodejs, React, and Mongodb. Learned how to make a REST API.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://restrant.herokuapp.com/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="primary" size="md" className="Button1">Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/project-REST-rant"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md" className="Button1">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary" className="mb-3">
                    <HoverVideoPlayer
                    videoSrc={breakoutgame}
                    loadingOverlay={
                        <div className="loading-overlay">
                        <div className="loading-spinner" />
                        </div>}
                    />
                        <Card.Body>
                            <Card.Title>2D Breakout Game</Card.Title>
                            <Card.Text>
                                Built entirely using vanilla Javascript. Demonstrating object oriented programming knowledge.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://gaalmonte.github.io/2D-Breakout-Game/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="primary" size="md" className="Button1">Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/2D-Breakout-Game"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md" className="Button1">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card border="primary" className="mb-3">
                    <HoverVideoPlayer
                    videoSrc={reactamole}
                    loadingOverlay={
                        <div className="loading-overlay">
                        <div className="loading-spinner" />
                        </div>}
                    />
                        <Card.Body>
                            <Card.Title>React A Mole</Card.Title>
                            <Card.Text>
                                Using React I used state to keep track of score, mole status and more.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://reactamole.herokuapp.com/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="primary" size="md" className="Button1">Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/react_a_mole"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="primary" size="md" className="Button1">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Projects;