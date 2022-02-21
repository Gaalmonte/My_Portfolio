import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

function FixedBar() {
    return <div className="bar">
        <BrowserRouter>
            <Navbar bg="light" expands="lg">
                <Container fluid>
                    <Navbar.Brand>
                        My Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
                        <Nav style={{ textDecoration: "none", justifyContent: "end", }}>
                            <NavHashLink to="#home" style={{ padding: "5px", textDecoration: "none", }}>
                                HOME
                            </NavHashLink>
                            <NavHashLink to="#projects" style={{ padding: "5px", textDecoration: "none", }}>
                                PROJECTS
                            </NavHashLink>
                            <NavHashLink to="#about" style={{ padding: "5px", textDecoration: "none", }}>
                                ABOUT
                            </NavHashLink>
                            <NavHashLink to="#contact" style={{ padding: "5px", textDecoration: "none", }}>
                                CONTACT
                            </NavHashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </BrowserRouter>
    </div>
}

export default FixedBar;