import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px' // Offset for fixed navbar
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.2rem' }}>Hello, my name is</h4>
                <h1 style={{
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    lineHeight: 1.1
                }}>
                    Bimsara Nawarathna
                </h1>
                {/* <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 4rem)',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem'
                }}>
                    I build things for the web.
                </h2> */}
                <p style={{
                    maxWidth: '650px',
                    margin: '0 auto 2.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem'
                }}>
                    I am an electronic and telecommunication engineering undergraduate with strong interests in networking, wireless communication, and artificial intelligence.
                </p>
                <div className="glass-card" style={{ display: 'inline-block' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2rem',
                        textAlign: 'center'
                    }}>
                        <div>
                            <h4 style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>2+</h4>
                            <p>Years Experience</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '2.5rem', color: 'var(--secondary)', fontWeight: 'bold' }}>10+</h4>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '3rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn">Check out my work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                    <a href="/Bimsara_Nawarathna_CV.pdf" download className="btn">Download Resume</a>
                </div>

                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', fontSize: '1.5rem' }}>
                    <a href="https://github.com/bimsaranawa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com/in/bimsara-nawarathna" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
