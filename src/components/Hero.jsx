import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/592097516_4235411116706661_5294015210296091790_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGulT-80XfIVlFr6PgCtCKMDqHPN-KdHxQOoc834p0fFOvARxVriihHD7IeNbsgg4u34i3ZfEa7878ehwh09LYt&_nc_ohc=g2lxuQc3FzQQ7kNvwFzwqnZ&_nc_oc=Adl0AwcQqUVbJRZnRUKWLKvoGeVUmWmXr5wl9h6BmBf_Yj3EG96Z839Vv67jdJ1IO7QRJxHpPQV9gExv23cBK1qt&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=vZWYQfuvH728cOv4ZSMVPQ&oh=00_AfhyZGM9bwLNdoORLI9sNMjdBdDzaVppIWLTkhUhVOetnQ&oe=6932C8D6',
            alt: 'Senior Training Session'
        },
        {
            image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/582968556_4221078464806593_6032628051459627647_n.jpg?stp=cp6_dst-jpg_s1080x2048_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHcPJxBEqBck9j26hMbUpZ3fXnPEI-mTaJ9ec8Qj6ZNovm5SqM-br3RudCOWMnXmY4vODhQtrhLQvMfQ7o-oit-&_nc_ohc=E7ZS1vDqgDcQ7kNvwFOPihv&_nc_oc=AdkM71G-pEXAwPFlMSL_0ukWixXm-fOC3hpuk8_GGzdRNs0fUHhrYUOixsYoUYDDAnYhvoHtpI269Fw-SjuYeoq5&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=d0uju4xHHvVZJg1EQdbjOA&oh=00_AfiABnnDM17G9fHc21MaNrtq-Oi3zi_cNVIdj2PpXlERVw&oe=6932AEBE',
            alt: 'Junior Match - Team Photo'
        },
        {
            image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/589729777_4232784056969367_6656712822927250715_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG56cjyyH53hNlOkn7eA7akSCP-p9splipII_6n2ymWKoBXF1wd47Gbfl5FVvlNR2h7FqSI7zXCPiwi8IvZmskW&_nc_ohc=1-AaJTrr4W0Q7kNvwGVNij3&_nc_oc=Admrzq8T51YG4qJe91UW3P5BQg9HwBu6LhCcHwWGNIwr5iA4_opVM3J-MFUrkazOrOZIGlaqoP3tbQnCbeJBfflb&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=qfOGsmDBr4Ryt1TB8_lMUA&oh=00_AfhMIn8yh8Crj4Q2cr8wGBGYfQnGJrvII4Q6cjlIrnKZEw&oe=6932B894',
            alt: 'Training Action'
        },
        {
            image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/590963055_4232784020302704_7264409926011154325_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFlb1s_sq5c23-dPl9cg8EWEHi8-iejh1AQeLz6J6OHUOomXPMaIMLw1e9k0joEhcuhh0fF2lFuL4pb7Sv93lSR&_nc_ohc=TQrdW3AeMUMQ7kNvwGtt3Ye&_nc_oc=AdneFLn1_1K0IxPVLH3MXx1Recyn4mmIMrMgT4eBUhaIC5jIVkIF3X9IMP89gXwCIxYk12CoUTVlnuwhR5xFmtdl&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=KVlaMJwz0GU7VIsEPgMdyw&oh=00_AfiEXoNuEBP9XPPzKIdKE6XdXfmyevKz_dFbLHyusWsDcw&oe=6932CA7A',
            alt: 'Team Training'
        },
        {
            image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/571444776_4196713610576412_4274644242206264511_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFVcAEeA36kQIftzAHUN-3XbGskWw2TZUdsayRbDZNlRyKjmCwoFdVB-7YyXcvlsrAT2WEK0-Z_Ci8cYHtiy1bt&_nc_ohc=_bNrXW3yHtUQ7kNvwHa7npE&_nc_oc=AdnodhUKRkh-oPXtlMyjWtiEu3K1XiCdqyoJ_m_A9_lD3_yRT4JsE7H4TF72UEXqUC91m09vUlPeFebgL5moH7-m&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=93b-xzPjXZ2j3r1pGALLgA&oh=00_Afh54vqv-OyF7rIRRnjmCLREPfeCsctQhMzz5lp6DdT1bw&oe=6932C9BB',
            alt: 'Players in Action'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="hero">
            {/* Background Slider */}
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="hero-overlay"></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="hero-content">
                <div className="hero-badge animate-fade-in">
                    <span className="badge-icon">⚽</span>
                    <span className="badge-text">Est. 2024</span>
                </div>

                <h1 className="hero-title animate-fade-in-up">
                    PATO HORNETS
                </h1>

                <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Building Champions
                </p>

                <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    Elite football training for aspiring champions. Join our academy and transform your passion into excellence.
                </p>

                <div className="hero-ctas animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <button
                        className="btn btn-primary btn-large"
                        onClick={() => scrollToSection('contact')}
                    >
                        <span>Join the Academy</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        className="btn btn-secondary btn-large"
                        onClick={() => scrollToSection('about')}
                    >
                        <span>About Club</span>
                    </button>
                </div>

                {/* Stats */}
                <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="stat-item">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Students</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Coaches</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Years</div>
                    </div>
                </div>
            </div>

            {/* Slider Indicators */}
            <div className="hero-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator animate-float">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;
