import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <section className="contact-header">
        <div>
          <p className="section-label">GET IN TOUCH</p>

          <h1>Let's talk.</h1>
        </div>

        <p>
          Have a question about a product, your order, or ShopZone?
          Send us a message and we'll get back to you.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <div className="contact-info-item">
            <span>01</span>
            <div>
              <h3>Email</h3>
              <p>hello@shopzone.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span>02</span>
            <div>
              <h3>Response time</h3>
              <p>Usually within 24 hours.</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span>03</span>
            <div>
              <h3>Customer support</h3>
              <p>We're here to help with your shopping journey.</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          {submitted ? (
            <div className="success-message">
              <span>✓</span>

              <h2>Message sent.</h2>

              <p>
                Thanks for reaching out. We'll get back to you soon.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="send-another-button"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="send-button">
                Send message →
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contact;