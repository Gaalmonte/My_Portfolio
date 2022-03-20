import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./projects.css"
import Superchat from './superchat';
import PhaserGame from './phasergame';
import WeatherApi from './weatherapi';
import BreakoutGame from './breakoutgame';
import RestRant from './restrant';
import Project1 from './rottenpotatoes';

function Projects() {
    return <div id="projects" className="p">
        <Container >
            <h2 className="p-title">Projects</h2>
            <Row xs={1} md={3}>
                <Col>
                    <Project1/>
                </Col>
                <Col>
                    <RestRant />
                </Col>
                <Col>
                    <BreakoutGame />
                </Col>
            </Row>
            <Row xs={1} md={3}>
                <Col>
                    <PhaserGame />
                </Col>
                <Col>
                    <WeatherApi />
                </Col>
                <Col>
                    <Superchat />
                </Col>
            </Row>
        </Container>
    </div>
}

export default Projects;