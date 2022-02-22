import './App.css';
import Intro from './Components/Introduction/intro';
import Knowledgeleft from './Components/Knowledge/knowledgeleft';
import Knowledgeright from './Components/Knowledge/knowledgeright';
import FixedBar from './Components/Navbar/navbar';
import Projects from './Components/Projects/projects';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FooterBar from './Components/Footer/footer';
// import ContactPage from './Components/Contact/contactpage';

function App() {
  return (
    <div >
      <Container fluid className="Content">
        <Row className="spacing">
          <FixedBar />
        </Row>
        <Row>
          <Intro />
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
        {/* <Row>
          <ContactPage />
        </Row> */}
      </Container>
      <FooterBar/>
    </div>
  );
}

export default App;
