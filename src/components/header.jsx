import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div style={{ display: 'inline' }}>
                <nav className="Nav">
                    <Link to="/" onClick={closeMobileMenu}>
                        <img className="logoNav" src={require("./images/logos/Primary Logo/JC Primary Logo_7546C.png")} alt="Logo" />
                    </Link>
                    <div className={`header ${isMobileMenuOpen ? 'open' : ''}`}>
                        <span className="closebtn" onClick={closeMobileMenu}>&times;</span>
                        <Link to="/" onClick={closeMobileMenu}>Home</Link>
                        <Link to="/services" onClick={closeMobileMenu}>Services</Link>
                        <Link to="/resources" onClick={closeMobileMenu}>Resources</Link>
                        <Link to="/Contact" onClick={closeMobileMenu}>Contact</Link>
                    </div>
                    <div className="hamburger" onClick={toggleMobileMenu}>
                        &#9776; {/* Hamburger icon */}
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
