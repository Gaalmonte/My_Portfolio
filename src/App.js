import './App.css';
import Intro from './Components/Introduction/intro';
import Knowledgeleft from './Components/Knowledge/knowledgeleft';
import Knowledgeright from './Components/Knowledge/knowledgeright';
import FixedBar from './Components/Navbar/navbar';
import Projects from './Components/Projects/projects';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ContactLeft from './Components/Contact/contactleft';
import Background from './Components/Background/background';
import ContactRight from './Components/Contact/contactright';

function App() {
  return (
    <div className="Content">
      <Container fluid>
        <Background className="bg"/>
        <Row>
          <FixedBar />
        </Row>
        <Row>
        <Intro/>
        </Row>
        <Row>
          <Col>
            <Knowledgeleft />
          </Col>
          <Col>
            <Knowledgeright />
          </Col>
        </Row>
        <Row>
          <Projects />
        </Row>
        <Row>
          <Col sm={5}>
            <ContactLeft/>
          </Col>
          <Col sm={6}>
            <ContactRight/>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
