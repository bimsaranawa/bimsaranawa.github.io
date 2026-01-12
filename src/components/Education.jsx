const Education = () => {
    const education = [
        {
            id: 1,
            degree: "Bachelor of Science in Engineering",
            institution: "University of Moratuwa, Sri Lanka",
            year: "2022 - Ongoing",
            description: "CGPA of 3.76/4.0 with Dean's list appearances in 1,5,6,7 semesters"
        },
        {
            id: 2,
            degree: "Diploma in Software Engineering",
            institution: "National Institue of Business Management, Kandy, Sri Lanka",
            year: "2021 - 2022",
            description: "Successfully completed with a distinction pass awarded by Coventry University, UK"
        },
        {
            id: 3,
            degree: "School Education",
            institution: "St.Anthony's College, Kandy, Sri Lanka",
            year: "2007 - 2020",
            description: "Successfully completed with an Island rank of 56 for the GCE A/L's under Physical Science stream"
        }
    ];

    return (
        <section id="education">
            <div className="container">
                <h2>My <span>Education</span></h2>
                <div className="slider">
                    {education.map((edu) => (
                        <div key={edu.id} className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '100px',
                                height: '100px',
                                background: 'var(--primary)',
                                filter: 'blur(50px)',
                                opacity: 0.2
                            }}></div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{edu.degree}</h3>
                            <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{edu.institution}</h4>
                            <div style={{
                                display: 'inline-block',
                                background: 'rgba(255,255,255,0.05)',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                fontSize: '0.9rem',
                                marginBottom: '1rem',
                                color: 'var(--text-secondary)'
                            }}>
                                {edu.year}
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                {edu.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
