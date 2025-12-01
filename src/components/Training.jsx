import './Training.css';

const Training = () => {
    const programs = [
        {
            icon: '🧤',
            title: 'Goalkeeper Training',
            description: 'Specialized training for shot-stopping, positioning, and distribution',
            image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/571451153_4200087783572328_7052599451507654643_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEsrDm-24bfs9rAuI6ZeTZZR2ES8YRwDQ5HYRLxhHANDo9UBXUathEnBfo4cU6b4xswjDkg0CV3hRAlYMGMPrbF&_nc_ohc=TJ_d_7JHOCQQ7kNvwEFaeON&_nc_oc=Adn5sb9uZMHsyLwX77rdTQHimWcjO4ivGCIZjhfyUV4ciVL4F8ddUITArldgG3B2cfbW8WoFtZqF0f1r8uPZKq-K&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=T-3qoli3BT08L1oIt7waxg&oh=00_AfgVvLLjdpAtSc6S3XwPdsfq9eYPlgha2T5y3-xaN8RdUg&oe=6932AFC9',
            features: ['Shot Stopping', 'Positioning', 'Distribution', 'Command of Box']
        },
        {
            icon: '⚽',
            title: 'Junior Development',
            description: 'U8-U14: Building fundamental skills and fostering love for the game',
            image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/571758917_4202228120024961_6230605751279769045_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE9g4I_yMDznyht04DSULRvbE6A8ZOdx_dsToDxk53H9-XzROqedEmr8FOOBBi6z_3AHsrN7qZUGs-SVrGSnhO9&_nc_ohc=IXMuAWtQU7QQ7kNvwEaLo7m&_nc_oc=AdkgdktNJwoFNloE8iqLUiMViSc-85cDFuxYHa-cxcvbMXeL3WgZXgvWxak06FUiwoCxBYdP9fG2kV-wjyVGA5ZP&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=JTbIaUM7GuYWzfGW0Nsvng&oh=00_Afgzh3cG-ioxgYJd-jfTT9KSXnVq3FshNUpzWHAosKvCQw&oe=6932C226',
            features: ['Ball Control', 'Team Play', 'Basic Tactics', 'Character Building']
        },
        {
            icon: '🏆',
            title: 'Senior Elite Program',
            description: 'Advanced training for competitive senior and youth players',
            image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/584100378_4222910681290038_6022818977225271489_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHa3TIuXAWYTPbzmR9I42jN_amwvKVHBRr9qbC8pUcFGk6GBmHu6ujZyReenyz598Ni2bD3yA3qoPkrp9BzbENb&_nc_ohc=1stKKRvaAOgQ7kNvwE56h_W&_nc_oc=Adm_j1YqpP6JihF0RWrFVMWnZeKGYCKIRC1wk09Qyx1dAyCsN5Lb1FAq7rQKmu7xpTSBRxWSbtW1mTSuka2GRjaz&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=9JeldAH6oQON1-BjwfyJhg&oh=00_Afj58v8oTXLtSHlDuNeGqQYz6oTHPQHhSlix4_qRdAKMRg&oe=6932C402',
            features: ['Advanced Tactics', 'Match Preparation', 'Physical Conditioning', 'Mental Training']
        }
    ];

    const schedule = [
        { day: 'Monday - Friday', time: 'Evening Sessions', activity: 'Technical & Tactical Training' },
        { day: 'Saturday', time: 'Morning & Afternoon', activity: 'Match Play & Drills' },
        { day: 'Sunday', time: 'Flexible', activity: 'Recovery & Optional Sessions' }
    ];

    return (
        <section id="training" className="section training-section">
            <div className="section-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Training Programs</h2>
                    <p className="section-subtitle">
                        Comprehensive programs designed to develop champions at every level
                    </p>
                </div>

                {/* Training Programs */}
                <div className="programs-grid">
                    {programs.map((program, index) => (
                        <div key={index} className="program-card card">
                            <div className="program-image-wrapper">
                                <img src={program.image} alt={program.title} className="program-image" />
                                <div className="program-overlay"></div>
                                <div className="program-icon-badge">{program.icon}</div>
                            </div>

                            <div className="program-content">
                                <h3 className="program-title">{program.title}</h3>
                                <p className="program-description">{program.description}</p>

                                <ul className="program-features">
                                    {program.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="program-feature">
                                            <span className="feature-check">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Training Schedule */}
                <div className="schedule-section">
                    <h3 className="schedule-title">Weekly Training Schedule</h3>
                    <p className="schedule-subtitle">Flexible training days to accommodate your lifestyle</p>

                    <div className="schedule-grid">
                        {schedule.map((item, index) => (
                            <div key={index} className="schedule-card card-glass">
                                <div className="schedule-day">{item.day}</div>
                                <div className="schedule-time">{item.time}</div>
                                <div className="schedule-activity">{item.activity}</div>
                            </div>
                        ))}
                    </div>

                    <div className="schedule-cta">
                        <p className="cta-text">
                            Ready to start your journey? Join us for a trial session!
                        </p>
                        <button
                            className="btn btn-accent btn-large"
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Book Trial Session
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Training;
