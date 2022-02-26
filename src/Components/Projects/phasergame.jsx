import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import HoverVideoPlayer from 'react-hover-video-player';
import phasergame from '../img/phasergame.mp4';
import phasergamepreview from '../img/phasergamepreview.png'
import './projects.css'

function PhaserGame() {
    return (
      <div className="Content">
          <Card id="cardsize" border="Dark" className="card text-white bg-dark mb-3">
                    <HoverVideoPlayer className='preview'
                    videoSrc={phasergame}
                    pausedOverlay={
                        <img
                          src={phasergamepreview}
                          alt="preview for phaser game"
                          style={{
                            // Make the image expand to cover the video's dimensions
                            width: '100%',
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
                            <Card.Title>2D Dungeon Crawler</Card.Title>
                            <Card.Text>
                                Utilizing Javascript and Phaser 3. Collaborating project with Bootcamp Classmate.
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
                                <Button variant="secondary" size="md"className="Button1" >Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
      </div>
    );
  }

  export default PhaserGame;
