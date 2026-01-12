import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', to: '#home' },
        { name: 'About', to: '#about' },
        { name: 'Experience', to: '#experience' },
        { name: 'Tech Stack', to: '#techstack' },
        { name: 'Projects', to: '#projects' },
        { name: 'Awards', to: '#awards' },
        { name: 'Education', to: '#education' },
        { name: 'Contact', to: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            background: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem'
            }}>
                <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Portfolio<span style={{ color: 'var(--primary)' }}>.</span>
                </a>

                {/* Desktop Menu */}
                <ul style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.to} style={{ fontSize: '1rem', fontWeight: 500 }}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu} style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    background: 'var(--bg-dark)',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    padding: '2rem'
                }}>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.to}
                                    onClick={() => setIsOpen(false)}
                                    style={{ fontSize: '1.1rem' }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <style>{`
        .desktop-menu { display: flex; }
        .mobile-toggle { display: none; }
        
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
