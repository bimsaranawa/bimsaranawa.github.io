import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaJava, FaAws } from 'react-icons/fa';
import { SiPython, SiPostgresql, SiMysql, SiTypescript, SiCplusplus, SiTensorflow, SiPytorch, SiHuggingface } from 'react-icons/si';

const TechStack = () => {
    const techs = [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "Java", icon: <FaJava color="#007396" /> },
        { name: "C/C++", icon: <SiCplusplus color="#00599C" /> },
        { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
        { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" /> },
        { name: "HuggingFace", icon: <SiHuggingface color="#FFD21E" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#06B6D4" /> },
        { name: "MySQL", icon: <SiMysql color="#3178C6" /> },
        { name: "AWS", icon: <FaAws color="#FF9900" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    ];

    return (
        <section id="techstack">
            <div className="container">
                <h2>My <span>Tech Stack</span></h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                    {techs.map((tech, index) => (
                        <div key={index} className="glass-card" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            width: '120px',
                            padding: '1.5rem 1rem',
                            transition: 'all 0.3s ease'
                        }}>
                            <div style={{ fontSize: '3rem' }}>
                                {tech.icon}
                            </div>
                            <p style={{ fontWeight: 500 }}>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
