import {Card, Button} from "react-bootstrap";
import HoverVideoPlayer from 'react-hover-video-player';
import RottenPotatoes from '../img/rottenpotatoesvid.mp4';
import RottenPotatoesPreview from '../img/rottenpotatoespic.png'
import './projects.css'

function Project1() {
    return (
      <div className="Content">
        <Card id="cardsize" border="Dark" className="card text-white bg-dark mb-3">
                    <HoverVideoPlayer className='preview'
                    videoSrc={RottenPotatoes}
                    pausedOverlay={
                        <img
                          src={RottenPotatoesPreview}
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
                            <Card.Title>Rotten Potatoes</Card.Title>
                            <Card.Text>
                            Used omdAPI, PostgreSQL, Express, React and Nodejs to build a rotten tomatoes mock up. Made our own API for comment section and reviews!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://rotten-p0tat0es.herokuapp.com/"
                                target="_blank"
                                rel="noreferrer">
                                <Button variant="secondary" size="md" className="Button1">Deployment</Button>
                            </a>
                            <a href="https://github.com/Gaalmonte/rotten-potatoes"
                                target="_blank"
                                rel="noreferrer">
                                <Button variant="secondary" size="md" className="Button1">Source Code</Button>
                            </a>
                        </Card.Footer>
                    </Card>
      </div>
    );
  }

  export default Project1;
