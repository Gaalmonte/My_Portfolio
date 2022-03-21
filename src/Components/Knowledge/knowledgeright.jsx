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
                                <i title="HTML" id="html" alt="html" class='bx bxs-file-html' ></i>
                                <i title="CSS" id="css" alt="css" class='bx bxs-file-css' ></i>
                                <i title="JavaScript" id="javascript" alt="javascript" class='bx bxl-javascript' ></i>
                                <i title="React" id="react" alt="react" class='bx bxl-react' ></i>
                                <i title="Python" id="python" alt="python" class='bx bxl-python' ></i>
                            </div>
                            <h2 className="k-edu-title">Tools</h2>
                            <div className="k-skill-logo">
                                <i title="Heroku" id="heroku" alt="heroku" class='bx bxl-heroku'></i>
                                <i title="Git" id="git" alt="git" class='bx bxl-git'></i>
                                <i title="GitHub" id="github" alt="github" class='bx bxl-github' ></i>
                                <i title="Bootstrap" id="bootstrap" alt="bootstrap" class='bx bxl-bootstrap'></i>
                                <i title="Nodejs" id="nodejs" alt="nodejs" class='bx bxl-nodejs'></i>
                                <i title="MongoDB" id="mongodb" alt="mongodb" class='bx bxl-mongodb'></i>
                                <i title="PostgreSQL" id="postgresql" alt="postgresql" class='bx bxl-postgresql'></i>
                                <i title="Redux" id="redux" alt="redux" class='bx bxl-redux' ></i>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Knowledgeright;