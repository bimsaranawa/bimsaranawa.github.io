import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing products, orders, and analytics. Built with React and Recharts.",
            tags: ["React", "Node.js", "MongoDB"],
            image: "https://via.placeholder.com/400x250",
            github: "https://github.com",
            demo: "https://example.com"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task manager with real-time updates using Socket.io and beautiful drag-and-drop interface.",
            tags: ["Vue.js", "Firebase", "Tailwind"],
            image: "https://via.placeholder.com/400x250",
            github: "https://github.com",
            demo: "https://example.com"
        },
        {
            id: 3,
            title: "AI Image Generator",
            description: "App allowing users to generate images from text prompts using OpenAI API wrapper.",
            tags: ["Next.js", "OpenAI", "Stripe"],
            image: "https://via.placeholder.com/400x250",
            github: "https://github.com",
            demo: "https://example.com"
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2>Featured <span>Projects</span></h2>
                <div className="slider">
                    {projects.map((project) => (
                        <div key={project.id} className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{
                                height: '200px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
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
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.8rem',
                                            background: 'rgba(139, 92, 246, 0.2)',
                                            color: 'var(--primary)',
                                            padding: '4px 10px',
                                            borderRadius: '15px'
                                        }}>{tag}</span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-primary)' }}>
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--accent)' }}>
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
