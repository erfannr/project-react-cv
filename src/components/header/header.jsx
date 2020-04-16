import React, { Component } from 'react';
// import logo from "./headerwew.jpeg";
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


class Header extends Component {
    render() {
        return (
            <div className="topheader">
                <div class="container-fluid icon-top py-2 px-3">
                    <div class="row">
                        <div class="col d-flex justify-content-between align-items-baseline">
                            <div class="top-icons">
                                <a href="www.facebook.com" class="mx-2"><FontAwesomeIcon icon={faFacebook}/></a><a href="www.twitter.com" class="mx-2"><FontAwesomeIcon icon={faTwitter}/></a><a href="www.instagram.com" class="mx-2"><FontAwesomeIcon icon={faInstagram}/></a><a href="www.facebook.com" class="mx-2
         "><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            </div>
                            <h5 class="text-capitalize">Contact Me On <a href="https://wa.me/6281294001094" class="mx-2"><FontAwesomeIcon icon={faWhatsapp}/></a> </h5>
                        </div>
                    </div>
                </div>
            </div>
            
            
        )
        
    }
}

export default Header 