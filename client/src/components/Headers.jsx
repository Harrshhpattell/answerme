import React from 'react'
import { useState, useEffect } from 'react';
import '../styles/NavBar.css'
import { Link, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Headers = () => {
    const [navbarClass, setNavbarClass] = useState('');

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setNavbarClass('scrolled');
    } else {
      setNavbarClass('');
    }
  };

  return (
    <div className={`header-navbar ${navbarClass}`}>
     <Link to="/"> <div className="logo">AnswerMe</div></Link>
      <div className="nav-links">
      <Link to="/">  <a href="/">Home</a></Link>
       <Link to="/about"> <a href="/client/src/components/About.jsx">About</a></Link>
       <Link to="/docs"> <a href="/client/src/components/Documentation.jsx">Docs</a></Link>
       <a href="https://github.com/adityassharma-ss/answerme" className='i'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://twitter.com/aadityatwt" className='i'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default Headers;