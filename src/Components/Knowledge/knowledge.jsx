import React from 'react';
import "./knowledge.css"
import njitLogo from '../img/njitlogo.png'

function Knowledge(){
return <div className="k">
        <div className="k-left">
            <div className="k-bg"></div>
            <div className="k-left-wrapper">
                <h2 className="k-edu-title">Education</h2>
                <div className="k-edu-inline">
                    <div className="k-edu-item">
                        <div className="k-logo-item">
                            <img src={njitLogo} alt="njit logo" className="k-edu-img"/>
                        </div>
                        <div className="k-desc-item">
                            <div className="k-title-item"><h3>Computer Science Bachelors Degree</h3></div>
                            <div className="k-title-item"><p>Spring 2022 - Fall 2024</p></div>
                        </div>
                    </div>
                    <div className="k-edu-item">
                        <div className="k-logo-item">
                        <img src={njitLogo} alt="njit logo" className="k-edu-img"/>
                        </div>
                        <div className="k-desc-item">
                            <div className="k-title-item"><h3>Software Development Bootcamp Certification</h3></div>
                            <div className="k-title-item"><p>Sept 2021 - May 2022</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="k-right">
            <div className="k-right-wrapper">
                <h2 className="k-edu-title">Languages</h2>
                <div className="k-edu-skill">
                    <div className="k-skill-logo">
                    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
                    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
                    </div>
                    <h2 className="k-edu-title">Tools</h2>
                    <div className="k-skill-logo">
                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
                    <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
                    <a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> </a>
                    <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>
                    <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>
                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> 
                    <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Knowledge;