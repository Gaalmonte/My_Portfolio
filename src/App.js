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
       <Background/>
      <Container fluid>

        <Row>
          <FixedBar className="element"/>
        </Row>
        <Row>
        <Intro className="element" />
        </Row>
        <Row>
          <Col sm={6}>
            <Knowledgeleft className="element" />
          </Col>
          <Col sm={6}>
            <Knowledgeright className="element"/>
          </Col>
        </Row>
        <Row>
          <Projects className="element"/>
        </Row>
        <Row>
          <Col sm={5}>
            <ContactLeft className="element"/>
          </Col>
          <Col sm={6}>
            <ContactRight className="element"/>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
