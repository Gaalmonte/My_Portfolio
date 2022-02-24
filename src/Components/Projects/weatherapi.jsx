import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import HoverVideoPlayer from 'react-hover-video-player';
import weatherapi from '../img/weatherapi.mp4';
import weatherapipreview from '../img/weatherapipreview.png'

function WeatherApi() {
    return (
      <div className="Content">
          <Card border="Dark" className="card text-white bg-dark mb-3">
                    <HoverVideoPlayer className='preview'
                    videoSrc={weatherapi}
                    pausedOverlay={
                        <img
                          src={weatherapipreview}
                          alt="preview for my weather api site"
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
                            <Card.Title>Weather API</Card.Title>
                            <Card.Text>
                                Built a page that calls upon an API using React to deliver the weather of city chosen.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://weatherapispa.herokuapp.com/"
                                target="_blank"
                                rel="noopener no referrer">
                                <Button variant="secondary" size="md"className="Button1" >Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/RR-React-SPA-Project"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Button variant="secondary" size="md"className="Button1" >Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
      </div>
    );
  }

  export default WeatherApi;
