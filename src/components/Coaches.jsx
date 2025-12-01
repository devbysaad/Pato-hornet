import './Coaches.css';

const Coaches = () => {
    const headCoach = {
        name: 'Head Coach',
        title: 'Director of Football',
        image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/559922585_1389878346480129_2229006293747755597_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHf7t1O1KQsznv0lRBMNacZGI0O-Z3gOb4YjQ75neA5vm2YEHtGZXrHcU0dK8sEcoVIqFAd04dWa6YxOKJLP3xO&_nc_ohc=EiSBf9PQ8VkQ7kNvwGHrdUF&_nc_oc=Adn0h-_dYsM9v42bd1koM_vwFy5VXXvGpnJTeQTCSNlY501NPav0NFuRNu-UUV3I1gDNEncCm0a8T0a32MC7LBa_&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=W69wvfajpKumiBrfF-Jl5g&oh=00_AfiTu7bAWpDkxiU_bpP_XVQ84qukV9zuAxf5H9442z1k1Q&oe=69329941',
        bio: 'With over 15 years of coaching experience and a passion for developing young talent, our head coach brings world-class expertise to Pato Hornets. Dedicated to building not just skilled players, but confident, disciplined champions.',
        achievements: [
            'UEFA Pro License',
            '10+ Years Experience',
            'Youth Development Specialist',
            'Championship Winning Coach'
        ]
    };

    const assistantCoaches = [
        {
            name: 'Goalkeeper Coach',
            specialty: 'GK Training',
            icon: '🧤'
        },
        {
            name: 'Fitness Coach',
            specialty: 'Physical Conditioning',
            icon: '💪'
        },
        {
            name: 'Tactical Coach',
            specialty: 'Strategy & Analysis',
            icon: '📋'
        },
        {
            name: 'Youth Coach',
            specialty: 'Junior Development',
            icon: '⭐'
        }
    ];

    return (
        <section id="coaches" className="section coaches-section">
            <div className="section-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Our Coaching Staff</h2>
                    <p className="section-subtitle">
                        Expert coaches dedicated to bringing out the best in every player
                    </p>
                </div>

                {/* Head Coach */}
                <div className="head-coach-section">
                    <div className="head-coach-image-wrapper">
                        <img src={headCoach.image} alt={headCoach.name} className="head-coach-image" />
                        <div className="head-coach-overlay"></div>
                    </div>

                    <div className="head-coach-content">
                        <div className="coach-badge">
                            <span className="badge-icon">🏆</span>
                            <span>HEAD COACH</span>
                        </div>

                        <h3 className="head-coach-name">{headCoach.name}</h3>
                        <p className="head-coach-title">{headCoach.title}</p>

                        <p className="head-coach-bio">{headCoach.bio}</p>

                        <div className="achievements-grid">
                            {headCoach.achievements.map((achievement, index) => (
                                <div key={index} className="achievement-item">
                                    <span className="achievement-check">✓</span>
                                    <span className="achievement-text">{achievement}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Assistant Coaches */}
                <div className="assistant-coaches">
                    <h3 className="assistant-coaches-title">Specialized Coaching Team</h3>
                    <div className="assistant-coaches-grid">
                        {assistantCoaches.map((coach, index) => (
                            <div key={index} className="assistant-coach-card card-glass">
                                <div className="coach-icon">{coach.icon}</div>
                                <h4 className="coach-name">{coach.name}</h4>
                                <p className="coach-specialty">{coach.specialty}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coaches;
