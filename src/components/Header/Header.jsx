import React, { useState } from 'react';
import './header.css'
const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
      };
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <header id='header2' className={isSticky ? 'sticky' : 'default_header'}>
        <a href="#" className="brand">Supreme Bath Refinishing</a>
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="btn">
            <i className="fas fa-times close-btn" onClick={toggleMenu}></i>
          </div>
          <a className='nav_text' href="#home">Home</a>
          <a className='nav_text' href="#aboutUs">About Us</a>
          <a className='nav_text' href="#ourPortfolio">OurPortfolio</a>
          <a className='nav_text' href="#contacts">Contact</a>
        </div>
        <div className="btn">
          <i className="fas fa-bars menu-btn" onClick={toggleMenu}></i>
        </div>
      </header>
    );
};

export default Header;