import React from 'react';

import './FooterStyle.css';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <small>Made By Tatiana Aviles</small>
        <small id="footerSlogan">
          Let's Connect on
         <a href="https://www.linkedin.com/in/tatianaaviles/" style={{ color: 'white' }}>LinkedIn </a>
        </small>
      </div>
    </div>
  )
}

export default Footer;