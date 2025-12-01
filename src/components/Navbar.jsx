import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'teams', label: 'Teams' },
        { id: 'coaches', label: 'Coaches' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'training', label: 'Training' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo" onClick={() => scrollToSection('home')}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFI1IBfu74U0oGhRWfofu4E46KUIusE33Kw&s"
                        alt="Pato Hornets Logo"
                        className="logo-image"
                    />
                    <div className="logo-text">
                        <span className="logo-name">PATO HORNETS</span>
                        <span className="logo-tagline">Football Club</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <ul className="nav-links desktop-nav">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className="nav-link"
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <button
                    className="btn btn-primary navbar-cta"
                    onClick={() => scrollToSection('contact')}
                >
                    Join Academy
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-links">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className="mobile-nav-link"
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            className="btn btn-primary mobile-cta"
                            onClick={() => scrollToSection('contact')}
                        >
                            Join Academy
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
