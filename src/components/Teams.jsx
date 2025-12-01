import './Teams.css';

const Teams = () => {
    const teams = [
        {
            name: 'Junior Team',
            category: 'U8 - U14',
            image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/566221382_4194571417457298_1594797414632328232_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHXQs2VEEfv3SD563ZzlJ1g8fKPCeO4Suvx8o8J47hK67U2r6iCynXd3H9gxMRoVKf_PEdwMOxbfg6k1I7IH50m&_nc_ohc=jD-dEyjIELwQ7kNvwFB_Q-E&_nc_oc=AdlqJP9lTgI5KxLK96wSF8taq2qIrD182SC8TBBhkkS8zUp-3aGM9dtWr4mIw39ua6kK3-X-7uv2yXn40wHfjziu&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=1LLiwSB38uVntWBN5viHeg&oh=00_AfhBbyaK0EVvQ1eWcV98tT0TFvD1kQps5U26y_fGwLLRCQ&oe=6932C969',
            description: 'Building foundational skills and fostering a love for the game',
            players: [
                { name: 'Young Defender', position: 'Defender', number: '4' },
                { name: 'Rising Star', position: 'Midfielder', number: '10' },
                { name: 'Future Striker', position: 'Forward', number: '9' },
                { name: 'Junior Keeper', position: 'Goalkeeper', number: '1' }
            ]
        },
        {
            name: 'Youth Team',
            category: 'U16 - U18',
            image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/565312957_4193512127563227_5552355689449436681_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF4yStGVtpZvd7xElcO4j_QU9fqHs9DLk5T1-oez0MuTmZiEZyy9odiG1ykYrNT_6MZrae0Pk0Aij34cYFCq1yL&_nc_ohc=KsIyuuD8SPoQ7kNvwHwWto9&_nc_oc=AdksR4p7T_sCNYxXts5ZyapPibtJXyYdKGlflSo-A9S2x7ctmept6lZWZHYR6-WDHmb5RprzOFEjTqZitVQ1Wy3J&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=wv7u5zRi0uvRxDEPqgQLTg&oh=00_AfhWKCsChfqzDLDI3yQPK1K2nU9sBexghdzLaRHVuhh4bQ&oe=6932AFE8',
            description: 'Advanced training for competitive youth players',
            players: [
                { name: 'Elite Defender', position: 'Defender', number: '5' },
                { name: 'Playmaker', position: 'Midfielder', number: '8' },
                { name: 'Goal Machine', position: 'Forward', number: '11' },
                { name: 'Safe Hands', position: 'Goalkeeper', number: '13' }
            ]
        },
        {
            name: 'Senior Team',
            category: 'Senior Players',
            image: 'https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/561168790_4196713650576408_9132519474200112415_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF9tMEn8kC88Rp0EYw2HCX9bO-fXjOBdT1s759eM4F1PR02ksUZCr_B3q078GjIuL0QLSjONztryAYgoJAJ3yXE&_nc_ohc=N8VNFz_4IEEQ7kNvwH_Bect&_nc_oc=AdlM0g9BrtR69kB98wNbNiy9uRi6hDAuQ9gOYmU2WdViuUpI86dYhZh81Lx3Uh3hBWlxhsmXii-4Br8ekKvNibQP&_nc_zt=23&_nc_ht=scontent.fisb12-1.fna&_nc_gid=LrTINhsTiw5JX_9w-oSgJQ&oh=00_Afjo-w69Sks2IH0R7EbBY1K75DNwgtP3zYtC2Y42VbEqIA&oe=6932C6D9',
            description: 'Competitive football at the highest level',
            players: [
                { name: 'Team Captain', position: 'Defender', number: '3' },
                { name: 'Midfield General', position: 'Midfielder', number: '6' },
                { name: 'Top Scorer', position: 'Forward', number: '7' },
                { name: 'Star Keeper', position: 'Goalkeeper', number: '1' }
            ]
        }
    ];

    const positionColors = {
        'Goalkeeper': '#FFD700',
        'Defender': '#4169E1',
        'Midfielder': '#32CD32',
        'Forward': '#DC143C'
    };

    return (
        <section id="teams" className="section teams-section">
            <div className="section-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Our Teams</h2>
                    <p className="section-subtitle">
                        From grassroots to glory - meet the players who wear the Hornets jersey with pride
                    </p>
                </div>

                {/* Teams */}
                <div className="teams-grid">
                    {teams.map((team, index) => (
                        <div key={index} className="team-section">
                            <div className="team-header">
                                <div className="team-image-wrapper">
                                    <img src={team.image} alt={team.name} className="team-image" />
                                    <div className="team-image-overlay"></div>
                                </div>
                                <div className="team-info">
                                    <h3 className="team-name">{team.name}</h3>
                                    <span className="team-category">{team.category}</span>
                                    <p className="team-description">{team.description}</p>
                                </div>
                            </div>

                            <div className="players-grid">
                                {team.players.map((player, playerIndex) => (
                                    <div key={playerIndex} className="player-card card-glass">
                                        <div className="player-number" style={{
                                            background: positionColors[player.position]
                                        }}>
                                            {player.number}
                                        </div>
                                        <div className="player-info">
                                            <h4 className="player-name">{player.name}</h4>
                                            <span
                                                className="player-position"
                                                style={{ color: positionColors[player.position] }}
                                            >
                                                {player.position}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teams;
