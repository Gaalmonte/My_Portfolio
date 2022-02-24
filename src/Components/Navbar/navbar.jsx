import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import "./navbar.css"

function FixedBar() {
    return <div className="bar">
        <BrowserRouter>
            <Navbar expands="lg" fixed="top">
                <Container fluid>
                    <Navbar.Brand className="Brand">
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
                        <Nav className="Bar">
                            <NavHashLink className="Link" to="#">
                                ABOUT
                            </NavHashLink>
                            <NavHashLink className="Link" to="#education">
                                EDUCATION
                            </NavHashLink>
                            <NavHashLink className="Link" to="#projects">
                                PROJECTS
                            </NavHashLink>
                            <NavHashLink className="Link" to="#contact">
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