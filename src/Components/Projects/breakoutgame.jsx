import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import HoverVideoPlayer from 'react-hover-video-player';
import breakoutgame from '../img/breakoutgame.mp4';
import breakoutgamepreview from '../img/2dbreakoutpreview.png'
import './projects.css'

function BreakoutGame() {
    return (
      <div className="Content">
          <Card id="cardsize" border="Dark" className="card text-white bg-dark mb-3">
                    <HoverVideoPlayer className='preview'
                    videoSrc={breakoutgame}
                    pausedOverlay={
                        <img
                          src={breakoutgamepreview}
                          alt="preview for my breakout game"
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
                            <Card.Title>2D Breakout Game</Card.Title>
                            <Card.Text>
                                Break all the bricks to earn points and move up to the next level! Built entirely using vanilla Javascript. Demonstrating object oriented programming.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://gaalmonte.github.io/2D-Breakout-Game/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="secondary" size="md" className="Button1">Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/2D-Breakout-Game"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="secondary" size="md" className="Button1">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
      </div>
    );
  }

  export default BreakoutGame;
