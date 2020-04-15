import React, { Component } from 'react'
import "./skill.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faNodeJs, faJava, faReact, faJs } from '@fortawesome/free-brands-svg-icons'


class skill extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row title mb-5">
                        <div class="col text-center">
                            <div>
                                <h1>i know some of this</h1>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 my-5">
                                    <div class="row">
                                        <div class="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faHtml5}/></span>
                                        </div>
                                        <div class="col-6">
                                            <h3 class="text-uppercase">html</h3>
                                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 my-5">
                                    <div class="row">
                                        <div class="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faCss3}/></span>
                                        </div>
                                        <div class="col-6">
                                            <h3 class="text-uppercase">css</h3>
                                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 my-5">
                                    <div class="row">
                                        <div class="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faJs}/></span>
                                        </div>
                                        <div class="col-6">
                                            <h3 class="text-uppercase">javascript</h3>
                                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 my-5">
                                    <div class="row">
                                        <div class="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faNodeJs}/></span>
                                        </div>
                                        <div class="col-6">
                                            <h3 class="text-uppercase">node</h3>
                                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 my-5">
                                    <div class="row">
                                        <div class="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faJava}/></span>
                                        </div>
                                        <div class="col-6">
                                            <h3 class="text-uppercase">Java</h3>
                                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 my-5">
                                    <div class="row">
                                        <div class="col-6 d-flex align-items-center skills-icon">
                                            <span><FontAwesomeIcon icon={faReact}/></span>
                                        </div>
                                        <div class="col-6">
                                            <h3 class="text-uppercase">react</h3>
                                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, architecto iusto est aliquid, corporis excepturi cupiditate iure hic accusantium fugiat.</p>
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