const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Freelance System and Software Developer",
            company: "N/A",
            period: "2025 - Present",
            description: "Completed several system and software development projects that include both frontend and backend development."
        },
        {
            id: 2,
            role: "IoT Platform Developer",
            company: "Magicbits Pvt Ltd",
            period: "2024 - 2025",
            description: "Developed IoT platforms for energy and production monitoring industrial projects as a part of my internship program."
        }
    ];

    return (
        <section id="experience">
            <div className="container">
                <h2>My <span>Experience</span></h2>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    position: 'relative',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'var(--gradient-main)',
                        display: 'block' // could hide on mobile if needed
                    }}></div>

                    {experiences.map((exp) => (
                        <div key={exp.id} className="glass-card" style={{
                            marginLeft: '50px',
                            position: 'relative'
                        }}>
                            {/* Timeline Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '-61px', // 50px margin + 2px line/2 + dot width/2
                                top: '20px',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: 'var(--secondary)',
                                border: '4px solid var(--bg-dark)'
                            }}></div>

                            <span style={{
                                background: 'var(--glass-bg)',
                                padding: '5px 15px',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                color: 'var(--accent)',
                                border: '1px solid var(--accent)'
                            }}>
                                {exp.period}
                            </span>
                            <h3 style={{ fontSize: '1.5rem', marginTop: '1rem' }}>{exp.role}</h3>
                            <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{exp.company}</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
