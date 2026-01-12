const Footer = () => {
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            background: 'rgba(15, 23, 42, 0.8)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: 'auto'
        }}>
            <p style={{ color: 'var(--text-secondary)' }}>
                © {new Date().getFullYear()} Bimsara Nawarathna. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
