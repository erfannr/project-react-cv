import React, { Component } from 'react'
import "./skill.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faNodeJs, faJava, faReact, faJs } from '@fortawesome/free-brands-svg-icons'


class skill extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row title mb-5">
                        <div className="col text-center">
                            <div>
                                <h1>Web Developer</h1>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 my-5">
                                    <div className="row">
                                        <div className="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faHtml5}/></span>
                                        </div>
                                        <div className="col-6">
                                            <h3 className="text-uppercase">html</h3>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-5">
                                    <div className="row">
                                        <div className="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faCss3}/></span>
                                        </div>
                                        <div className="col-6">
                                            <h3 className="text-uppercase">css</h3>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-5">
                                    <div className="row">
                                        <div className="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faJs}/></span>
                                        </div>
                                        <div className="col-6">
                                            <h3 className="text-uppercase">javascript</h3>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-5">
                                    <div className="row">
                                        <div className="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faNodeJs}/></span>
                                        </div>
                                        <div className="col-6">
                                            <h3 className="text-uppercase">node</h3>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-5">
                                    <div className="row">
                                        <div className="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faJava}/></span>
                                        </div>
                                        <div className="col-6">
                                            <h3 className="text-uppercase">Java</h3>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-5">
                                    <div className="row">
                                        <div className="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faReact}/></span>
                                        </div>
                                        <div className="col-6">
                                            <h3 className="text-uppercase">react</h3>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        )
    }
}

export default skill