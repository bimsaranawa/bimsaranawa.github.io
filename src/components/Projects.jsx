import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            id: 1,
            title: "Split federated learning based LLM for Open Radio Access Networks",
            description: "Usage of AI in Open Radio Access Networks provides a variety of benefits. However, it also raises concerns about privacy and resource constraints. This project addresses these challenges by implementing a split federated learning based LLM for Open Radio Access Networks.",
            tags: ["Python", "PyTorch", "TensorFlow", "ORAN", "Federated Learning", "LLM"],
            image: "/ORAN.jpg"
        },
        {
            id: 2,
            title: "Remote Controlling for Solar Inverters using Remote Procedure Calls",
            description: "This industrial project was done during my internship which involved developing a remote controlling system for solar inverters using Remote Procedure Calls (RPC) for several industrial renewable energy companies. I was responsible for the development of the necessary software and firmware for the project.",
            tags: ["ThingsBoard", "RPC", "Node.js", "C++", "ESP32", "AT Commands", "MQTT"],
            image: "/RPC.jpg",
            demo: "https://www.linkedin.com/posts/bimsara-nawarathna_thingsnode-iot-internshipexperience-activity-7340261332715261952-zheV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe26uEBL9fmu69uDarXSmS60f69qqvgEts"
        },
        {
            id: 3,
            title: "SportSense Mobile App - A personalized AI sports trainer",
            description: "This app uses computer vision to analyze and correct user posture in real-time across multiple sports. Offers personalized feedback through audio and guides users through workout routines.",
            tags: ["HuggingFace", "OpenCV", "Firebase", "Android Studio", "Kotlin", "Java"],
            image: "/sportsense.png",
            github: "https://github.com/bimsaranawa/SportSense"
        },
        {
            id: 4,
            title: "Product Market Fit (PMF) Analyzer",
            description: "A web based tool that tracks progress of a given SAAS product in an event based manner. It integrates AI to provide analytics and recommendations based on these events, which is useful for management to make decisions.",
            tags: ["Python", "Mixpanel", "Firebase", "AWS", "React", "JavaScript"],
            image: "/pmf.jpeg"
        },
        {
            id: 5,
            title: "CAD Editor For House Designing",
            description: "An Automated CAD Editor that converts simple floor plan images into editable digital models. Integrated automated feature detection for rooms, doors, and windows to streamline the design process.",
            tags: ["Python", "OpenCV", "AWS", "Next.js", "Kanva.js", "Tailwind CSS", "TypeScript"],
            image: "/cad.jpeg"
        },
        {
            id: 6,
            title: "Metroband - Vibrating Enabled Tempo Keeping Wristband",
            description: "A wearable wristband tailored for musicians, integrating vibration-enabled tempo-keeping capabilities. It assists musicians in maintaining tempo in noisy environments.",
            tags: ["C++", "Arduino", "ESP32", "Altium", "Solidworks"],
            image: "/metroband.jpg",
            github: "https://github.com/bimsaranawa/METROBAND",
            demo: "https://youtu.be/N5GJq5FccDs?si=-FTFEZ4lRfTZmju6"
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2>Featured <span>Projects</span></h2>
                <div className="slider">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="glass-card"
                            style={{
                                padding: 0,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onClick={() => setSelectedProject(project)}
                        >
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

                            <div style={{ padding: '1.5rem 1.5rem 2rem' }}>
                                <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProject(null)}>
                            <FaTimes />
                        </button>

                        <div className="modal-header">
                            <h3 className="modal-title">{selectedProject.title}</h3>
                        </div>

                        <div className="modal-image-container">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="modal-image"
                            />
                        </div>

                        <div className="modal-body">
                            <p className="modal-description">{selectedProject.description}</p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                {selectedProject.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.9rem',
                                        background: 'rgba(139, 92, 246, 0.2)',
                                        color: 'var(--primary)',
                                        padding: '6px 12px',
                                        borderRadius: '20px'
                                    }}>{tag}</span>
                                ))}
                            </div>

                            <div className="modal-links">
                                {selectedProject.github && (
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <FaGithub /> GitHub
                                    </a>
                                )}
                                {selectedProject.demo && (
                                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <FaExternalLinkAlt /> Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
