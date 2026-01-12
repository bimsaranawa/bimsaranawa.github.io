import { useState, useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
        if (!formData.user_email.trim()) {
            newErrors.user_email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
            newErrors.user_email = "Email is invalid";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        // REPLACE WITH YOUR EMAILJS KEYS
        // Sign up at https://www.emailjs.com/ to get these
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'template_4ngnqey';
        const PUBLIC_KEY = '-niTgMEcQ2zTzSc3r';

        try {
            // Uncomment the line below when you have your keys
            // await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);

            // Simulating API call for demonstration
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log("Email sent successfully!");
            setSubmitStatus('success');
            setFormData({ user_name: '', user_email: '', message: '' });
        } catch (error) {
            console.error("FAILED...", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact">
            <div className="container">
                <h2>Contact <span>Me</span></h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem'
                }}>
                    {/* Contact Info */}
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's work together!</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            I'm currently available for freelance projects and open to full-time opportunities. If you have a project that interests me, I'd love to hear about it.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)',
                                    fontSize: '1.2rem'
                                }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem' }}>Email</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>bimsaranawarathna@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(236, 72, 153, 0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--secondary)',
                                    fontSize: '1.2rem'
                                }}>
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem' }}>Phone</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>+94 71 977 4607</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(6, 182, 212, 0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent)',
                                    fontSize: '1.2rem'
                                }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem' }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Colombo, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="glass-card" ref={formRef} onSubmit={handleSubmit} noValidate>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', marginLeft: '0.5rem' }}>Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your Name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px 20px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: `1px solid ${errors.user_name ? '#ef4444' : 'rgba(255, 255, 255, 0.1)'}`,
                                        borderRadius: '8px',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                />
                                {errors.user_name && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginLeft: '0.5rem', marginTop: '0.25rem', display: 'block' }}>{errors.user_name}</span>}
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', marginLeft: '0.5rem' }}>Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px 20px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: `1px solid ${errors.user_email ? '#ef4444' : 'rgba(255, 255, 255, 0.1)'}`,
                                        borderRadius: '8px',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                />
                                {errors.user_email && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginLeft: '0.5rem', marginTop: '0.25rem', display: 'block' }}>{errors.user_email}</span>}
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', marginLeft: '0.5rem' }}>Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px 20px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: `1px solid ${errors.message ? '#ef4444' : 'rgba(255, 255, 255, 0.1)'}`,
                                        borderRadius: '8px',
                                        color: 'white',
                                        outline: 'none',
                                        resize: 'none',
                                        fontFamily: 'inherit'
                                    }}
                                ></textarea>
                                {errors.message && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginLeft: '0.5rem', marginTop: '0.25rem', display: 'block' }}>{errors.message}</span>}
                            </div>

                            <button className="btn" style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }} disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <p style={{ color: '#10b981', textAlign: 'center', marginTop: '0.5rem' }}>Message sent successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '0.5rem' }}>Failed to send message. Please try again.</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
