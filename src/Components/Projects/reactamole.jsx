import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import HoverVideoPlayer from 'react-hover-video-player';
import reactamole from '../img/reactamole.mp4';
import reactamolepreview from '../img/reactamolepreview.png'

function ReactAMole() {
    return (
      <div className="Content">
        <Card border="Dark" className="card text-white bg-dark mb-3">
                    <HoverVideoPlayer className='preview'
                    videoSrc={reactamole}
                    pausedOverlay={
                        <img
                          src={reactamolepreview}
                          alt="preview for my react a mole site"
                          style={{
                            // Make the image expand to cover the video's dimensions
                            width: 'auto',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      }
                    loadingOverlay={
                        <div className="loading-overlay">
                        <div className="loading-spinner" />
                        </div>}
                    />
                        <Card.Body className="cardbody">
                            <Card.Title>React A Mole</Card.Title>
                            <Card.Text>
                                Used State in React to keep track of score, mole status and more.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://reactamole.herokuapp.com/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="secondary" size="md" className="Button1">Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/react_a_mole"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="secondary" size="md" className="Button1">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
      </div>
    );
  }

  export default ReactAMole;
