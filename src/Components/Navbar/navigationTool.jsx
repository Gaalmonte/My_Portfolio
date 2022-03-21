import { Navbar, Nav, Container} from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import "./navbar.css"

function NavigationTool() {
    return <div className="bar">
        <Navbar collapseOnSelect expand="lg" id="br" variant="dark" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" id="txtStyle"></Nav>
                        <BrowserRouter>
                            <NavHashLink id="Link" to="#">
                                ABOUT
                            </NavHashLink>

                            <NavHashLink id="Link" to="#education">
                                EDUCATION
                            </NavHashLink>

                            <NavHashLink id="Link" to="#projects">
                                PROJECTS
                            </NavHashLink>

                            <NavHashLink id="Link" to="#contact">
                                CONTACT
                            </NavHashLink>
                        </BrowserRouter>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}

export default NavigationTool;