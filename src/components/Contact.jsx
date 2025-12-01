import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        ageGroup: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, this would send data to a backend
        setFormStatus('success');
        setTimeout(() => {
            setFormStatus('');
            setFormData({ name: '', email: '', phone: '', ageGroup: '', message: '' });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: '📍',
            title: 'Location',
            value: 'New City Phase 2, Block C',
            link: null
        },
        {
            icon: '📞',
            title: 'Phone',
            value: '0336 4676387',
            link: 'tel:03364676387'
        },
        {
            icon: '✉️',
            title: 'Email',
            value: 'atifa491@gmail.com',
            link: 'mailto:atifa491@gmail.com'
        },
        {
            icon: '🕒',
            title: 'Availability',
            value: 'Always Open',
            link: null
        }
    ];

    const ageGroups = ['U8', 'U10', 'U12', 'U14', 'U16', 'U18', 'Senior'];

    return (
        <section id="contact" className="section contact-section">
            <div className="section-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Ready to join the Hornets family? Contact us today!
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info-side">
                        <h3 className="contact-info-title">Contact Information</h3>
                        <p className="contact-info-description">
                            Have questions? We're here to help. Reach out through any of these channels.
                        </p>

                        <div className="contact-info-grid">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-info-item card-glass">
                                    <div className="contact-info-icon">{info.icon}</div>
                                    <div className="contact-info-content">
                                        <span className="contact-info-label">{info.title}</span>
                                        {info.link ? (
                                            <a href={info.link} className="contact-info-value link">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="contact-info-value">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/923364676387"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-cta"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.051 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>Chat on WhatsApp</span>
                        </a>

                        {/* Social Links */}
                        <div className="social-links">
                            <a
                                href="https://facebook.com/Atifpato7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Facebook"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-side">
                        <form className="contact-form card" onSubmit={handleSubmit}>
                            <h3 className="form-title">Send us a Message</h3>

                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="0300 1234567"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="ageGroup" className="form-label">Age Group *</label>
                                <select
                                    id="ageGroup"
                                    name="ageGroup"
                                    className="form-input"
                                    value={formData.ageGroup}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Age Group</option>
                                    {ageGroups.map((group) => (
                                        <option key={group} value={group}>{group}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-input form-textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell us about your interest in joining Pato Hornets..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-large form-submit">
                                Send Message
                            </button>

                            {formStatus === 'success' && (
                                <div className="form-success">
                                    ✓ Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
