import {Card, Button} from "react-bootstrap";
import HoverVideoPlayer from 'react-hover-video-player';
import restrant from '../img/restrant.mp4';
import restrantpreview from '../img/restrantpreview.png'
import './projects.css'

function RestRant() {
    return (
      <div className="Content">
          <Card id="cardsize" border="Dark" className="card text-white bg-dark mb-3">
                    <HoverVideoPlayer className='preview'
                    videoSrc={restrant}
                    pausedOverlay={
                        <img
                          src={restrantpreview}
                          alt="preview for my REST project"
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
                            <Card.Title>REST-rant</Card.Title>
                            <Card.Text>
                                Built using Express, Nodejs, React, and Mongodb. Also utilized postman at times. You can submit your own restaurants and leave comments.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://restrant.herokuapp.com/"
                                target="_blank"
                                rel="noreferrer">
                                <Button variant="secondary" size="md" className="Button1">Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/project-REST-rant"
                                target="_blank"
                                rel="noreferrer">
                                <Button variant="secondary" size="md" className="Button1">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
      </div>
    );
  }

  export default RestRant;
