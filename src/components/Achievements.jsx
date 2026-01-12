const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "Hackathon Winner 2023",
            organization: "Global Tech Summit",
            image: "https://via.placeholder.com/400x250"
        },
        {
            id: 2,
            title: "AWS Certified Solution Architect",
            organization: "Amazon Web Services",
            image: "https://via.placeholder.com/400x250"
        },
        {
            id: 3,
            title: "Best Open Source Contributor",
            organization: "GitHub Community",
            image: "https://via.placeholder.com/400x250"
        },
        {
            id: 4,
            title: "Google Cloud Certified",
            organization: "Google",
            image: "https://via.placeholder.com/400x250"
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
