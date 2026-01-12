const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2>About <span>Me</span></h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Image Placeholder */}
                    <div style={{
                        position: 'relative',
                        maxWidth: '400px',
                        margin: '0 auto'
                    }}>
                        <img
                            src="/Bimsara_Image.jpeg"
                            alt="Profile"
                            style={{
                                width: '100%',
                                aspectRatio: '1/1',
                                objectFit: 'cover',
                                borderRadius: '20px',
                                border: '2px solid var(--primary)',
                                display: 'block',
                                background: 'var(--bg-card)'
                            }}
                        />
                        {/* Decoratiive backdrop */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            width: '100%',
                            height: '100%',
                            border: '2px solid var(--secondary)',
                            borderRadius: '20px',
                            zIndex: -1
                        }}></div>

                    </div>

                    <div className="about-content">
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                            Electronic and Telecommunication Engineering Undergraduate<br />University of Moratuwa
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            I am a passionate developer with a strong foundation in networking, telecommunication and machine learning principles. I look forward to use my technical expertise to drive innovation in the industry and research.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            My journey in tech started when I started my undergraduate studies at University of Moratuwa. Since then, I've had the privilege of working on several industrial and research projects that made a significant impact.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            In the course of my studies, I've completed a six month internship. Further, I have worked on several system and software development projects as a freelance developer as well.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
