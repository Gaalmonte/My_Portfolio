import { Row, Col, Container} from "react-bootstrap"
import "./knowledge.css"


function Knowledgeright() {
    return <div className="k">
        <Container className="k-content">
            <Row>
                <Col>
                    <div className="k-wrapper">
                        <h2 className="k-edu-title">Languages</h2>
                        <div className="k-edu-skill">
                            <div className="k-skill-logo">
                                <i title="HTML" id="html" alt="html" className='bx bxs-file-html' ></i>
                                <i title="CSS" id="css" alt="css" className='bx bxs-file-css' ></i>
                                <i title="JavaScript" id="javascript" alt="javascript" className='bx bxl-javascript' ></i>
                                <i title="React" id="react" alt="react" className='bx bxl-react' ></i>
                                <i title="Python" id="python" alt="python" className='bx bxl-python' ></i>
                            </div>
                            <h2 className="k-edu-title">Tools</h2>
                            <div className="k-skill-logo">
                                <i title="Heroku" id="heroku" alt="heroku" className='bx bxl-heroku'></i>
                                <i title="Git" id="git" alt="git" className='bx bxl-git'></i>
                                <i title="GitHub" id="github" alt="github" className='bx bxl-github' ></i>
                                <i title="Bootstrap" id="bootstrap" alt="bootstrap" className='bx bxl-bootstrap'></i>
                                <i title="Nodejs" id="nodejs" alt="nodejs" className='bx bxl-nodejs'></i>
                                <i title="MongoDB" id="mongodb" alt="mongodb" className='bx bxl-mongodb'></i>
                                <i title="PostgreSQL" id="postgresql" alt="postgresql" className='bx bxl-postgresql'></i>
                                <i title="Redux" id="redux" alt="redux" className='bx bxl-redux' ></i>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Knowledgeright;