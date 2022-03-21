import {Row, Col, Container} from "react-bootstrap"
import emailjs from 'emailjs-com'

import "./contact.css";
function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_b5swx77', 'template_pnps17h', e.target, "user_xJbPTcQ0A7tHV5X4YJppl").then(res=>{console.log(res);}).catch(err=>console.log(err));
}

function ContactRight() {
    return <div id="contact" className="c">
        <Container fluid>
            <Row>
                <Col>
                <div className="c-contact-r">
                    <div className="c-title">
                    <h2 className="c-email">Contact me</h2>
                    </div>
                    <div className="c-item">
                        <form className="my-form" onSubmit={sendEmail} >
                            <div className="container" >
                            <ul>
                                <li>
                                <div className="grid">
                                <input type="text" placeholder="Name" name="name" required/>
                                </div>
                                <div className="grid">
                                <input type="email" placeholder="Email" name="user_email" required/>
                                </div>
                                </li>
                                <li>
                                <textarea placeholder="Message" name="message"></textarea>
                                </li>
                                <li>
                                <div className="grid grid-3">
                                <div className="required-msg">REQUIRED FIELDS</div>
                                <button className="btn-grid" type="submit" value="Send">
                                <span className="back">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt=""/>
                                </span>
                                <span className="front">SUBMIT</span>
                                </button>
                                <button className="btn-grid" type="reset">
                                <span className="back">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt=""/>
                                </span>
                                <span className="front">RESET</span>
                                </button>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </form>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default ContactRight;