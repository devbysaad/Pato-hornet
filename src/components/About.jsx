import './About.css';

const About = () => {
    const ageGroups = ['U8', 'U10', 'U12', 'U14', 'U16', 'U18', 'Senior'];

    const features = [
        {
            icon: '🏆',
            title: 'Championship Training',
            description: 'World-class coaching that builds champions on and off the field'
        },
        {
            icon: '⚽',
            title: 'All Age Groups',
            description: 'Programs designed for every age from U8 to Senior level'
        },
        {
            icon: '📍',
            title: 'Prime Location',
            description: 'Easily accessible facilities in New City Phase 2, Block C'
        },
        {
            icon: '🎯',
            title: 'Flexible Schedule',
            description: 'Training days designed to fit your busy lifestyle'
        }
    ];

    return (
        <section id="about" className="section about-section">
            <div className="section-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">About Pato Hornets</h2>
                    <p className="section-subtitle">
                        Building the next generation of football champions through dedication, teamwork, and excellence
                    </p>
                </div>

                {/* Main Content */}
                <div className="about-content">
                    {/* Left: Image */}
                    <div className="about-image-wrapper">
                        <div className="about-image">
                            <img
                                src="https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/567949502_4194571640790609_1530262775720714320_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE-JHr9A1G-VrY52JhkEMWWDNdZMQsntuMM11kxCye24_SsstoLJNg3aLmOxLKk8mkywN0MpujcISBk9xyvaPFZ&_nc_ohc=0C0TJfwFiyUQ7kNvwGzSXtC&_nc_oc=AdnDyFQrirtgQysXDjKv4EMtz18x_uEcqO1IE3SpLgcO8A7PZE3zxJtoOnhWzojX_E6G4O4PcFKPELkJjvi5NIVq&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=yQD85Q9S4sn3xO7q-GYeNA&oh=00_Afhnt16eXE1RtvcVksXsaLYAYKNF13mKAZK_rQhDmleIZw&oe=6932C48F"
                                alt="Junior Players Training"
                            />
                            <div className="image-overlay"></div>
                            <div className="image-badge">
                                <span className="badge-number">500+</span>
                                <span className="badge-text">Active Players</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="about-text">
                        <h3 className="about-heading">
                            Come train, compete, and grow with the Hornets!
                        </h3>

                        <p className="about-description">
                            At Pato Hornets Football Club, we're more than just a team – we're a family dedicated
                            to nurturing talent, building character, and creating champions. Our comprehensive
                            training programs cater to all age groups and skill levels, from grassroots development
                            to senior competitive football.
                        </p>

                        <p className="about-description">
                            With flexible training days and world-class facilities, we make it easy for aspiring
                            footballers to pursue their dreams while balancing school, work, and life. Join us
                            and experience the difference that professional coaching and a supportive community can make.
                        </p>

                        {/* Age Groups */}
                        <div className="age-groups">
                            <h4 className="age-groups-title">Age Groups We Train:</h4>
                            <div className="age-groups-list">
                                {ageGroups.map((group, index) => (
                                    <div key={index} className="age-group-badge">
                                        {group}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="quick-info">
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <div className="info-content">
                                    <span className="info-label">Location</span>
                                    <span className="info-value">New City Phase 2, Block C</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">🕒</span>
                                <div className="info-content">
                                    <span className="info-label">Training Schedule</span>
                                    <span className="info-value">Flexible Training Days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card card-glass">
                            <div className="feature-icon">{feature.icon}</div>
                            <h4 className="feature-title">{feature.title}</h4>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
