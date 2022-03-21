import './App.css';
import Intro from './Components/Introduction/intro';
import Knowledgeleft from './Components/Knowledge/knowledgeleft';
import Knowledgeright from './Components/Knowledge/knowledgeright';
import Projects from './Components/Projects/projects';
import {Row, Col, Container} from "react-bootstrap"
import ContactLeft from './Components/Contact/contactleft';
import Background from './Components/Background/background';
import ContactRight from './Components/Contact/contactright';
import NavigationTool from './Components/Navbar/navigationTool';

function App() {
  return (
    <div className="Content">
       <Background/>
      <Container fluid>
        <Row>
          <NavigationTool />
        </Row>
        <Row>
        <Intro />
        </Row>
        <Row>
          <Col sm={6}>
            <Knowledgeleft />
          </Col>
          <Col sm={6}>
            <Knowledgeright/>
          </Col>
        </Row>
        <Row>
          <Projects/>
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
