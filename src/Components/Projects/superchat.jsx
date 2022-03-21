import {Card, Button} from "react-bootstrap";
import HoverVideoPlayer from 'react-hover-video-player';
import superchat from '../img/superchat.mp4';
import chatpreview from '../img/chatpreview.png'
import './projects.css'

function Superchat() {
    return (
      <div className="Content">
          <Card id="cardsize" border="Dark" className="card text-white bg-dark mb-3">
                    <HoverVideoPlayer className='preview'
                    videoSrc={superchat}
                    pausedOverlay={
                        <img
                          src={chatpreview}
                          alt=""
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
                            <Card.Title className="cardtitle">Super Chat</Card.Title>
                            <Card.Text>
                                Chat in real time with React and Firebase, Authenticates the user with Google.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://react-firebasesuperchat.herokuapp.com/"
                                target="_blank"
                                rel="noreferrer">
                                <Button variant="secondary" size="md" className="Button1">Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/Chat-Application"
                                target="_blank"
                                rel="noreferrer">
                                <Button variant="secondary" size="md" className="Button1">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
      </div>
    );
  }

  export default Superchat;
