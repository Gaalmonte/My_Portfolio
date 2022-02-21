import React from 'react';
import "./knowledge.css"
import njitLogo from '../img/njitlogo.png'

function Knowledgeleft() {
    return <div className="k">
        <div className="k-left">
            <div className="k-bg"></div>
            <div className="k-left-wrapper">
                <h2 className="k-edu-title">Education</h2>
                <div className="k-edu-inline">
                    <div className="k-edu-item">
                        <div className="k-logo-item">
                            <img src={njitLogo} alt="njit logo" className="k-edu-img" />
                        </div>
                        <div className="k-desc-item">
                            <div className="k-title-item"><h3>Computer Science Bachelors Degree</h3></div>
                            <div className="k-title-item"><p>Spring 2022 - Fall 2024</p></div>
                        </div>
                    </div>
                    <div className="k-edu-item">
                        <div className="k-logo-item">
                            <img src={njitLogo} alt="njit logo" className="k-edu-img" />
                        </div>
                        <div className="k-desc-item">
                            <div className="k-title-item"><h3>Software Development Bootcamp Certification</h3></div>
                            <div className="k-title-item"><p>Sept 2021 - May 2022</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Knowledgeleft;