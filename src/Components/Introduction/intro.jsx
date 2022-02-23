import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./intro.css"
import Me from '../img/me.jpg'

function Intro() {
  return <div id="about" className="i">
    <Container fluid className="i-container">
      <Row>
        <Col>
          <img src={Me} alt="picture of someone programming" className="i-img" />
        </Col>
      </Row>
      <Row>
      <Col className="i-left-wrapper">
        <h2 className='i-intro'> Hello, My name is</h2>
        <h1 className='i-name'>German Almonte</h1>
        <div className="i-title">
          <div className="i-wrapper">
            <div className="i-item">Web Developer</div>
            <div className="i-item">Software Developer</div>
            <div className="i-item">Game Developer</div>
          </div>
        </div>
        <p className="i-description">
          I specialize in developing software of all types and as a hobby I like to dabble in game development.
        </p>
      </Col>
      </Row>
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        stroke="black"
        className="i-scroll"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="scroll">
          <path
            id="Vector"
            d="M40.5 15L34.5 9L28.5 15"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M28.5 24L34.5 30L40.5 24"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Group">
            <path
              id="Vector_3"
              d="M9 37.5H60"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            id="Vector_4"
            d="M34.5 27V9"
            strokeWidth="2.9895"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="Group_2">
            <path
              id="Vector_5"
              d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </Container>
  </div>
}

export default Intro;
