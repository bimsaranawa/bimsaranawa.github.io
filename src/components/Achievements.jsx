const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "Champions of VRCade 2.0 Competition 2024",
            organization: "IEEE Student Branch, University of Moratuwa",
            image: "/Champions_VRCade.jpeg"
        },
        {
            id: 2,
            title: "1st Runners Up of Idealize 2024",
            organization: "AIESEC in University of Moratuwa",
            image: "/Runnersup_Idealize.jpeg"
        },
        {
            id: 3,
            title: "Conceptualist Award of Idealize 2024",
            organization: "AIESEC in University of Moratuwa",
            image: "/Conceptualist_Idealize.jpeg"
        },
        {
            id: 4,
            title: "Finalist of Brainstorm 2024",
            organization: "IEEE EMBS University of Moratuwa",
            image: "/Finalist_Brainstorm.jpeg"
        },
        {
            id: 5,
            title: "Semifinalist of Robot Battle Competition 2024",
            organization: "University of Uwa Wellassa",
            image: "Semifinalist_Robot.jpeg"
        }
    ];

    return (
        <section id="awards">
            <div className="container">
                <h2>Awards & <span>Achievements</span></h2>
                <div className="slider">
                    {achievements.map((item) => (
                        <div key={item.id} className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{
                                height: '200px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{item.organization}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
