import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const availableServices = [
    "Software Development",
    "IT Consulting",
    "Accounting Services",
    "Digital Solutions",
    "Cloud Solutions",
    "Other"
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleServiceChange = (serviceName) => {
    setFormData((prev) => {
      if (prev.services.includes(serviceName)) {
        return { ...prev, services: prev.services.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, services: [...prev.services, serviceName] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      await addDoc(collection(db, "contactQueries"), {
        ...formData,
        status: "new",
        createdAt: serverTimestamp()
      });
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        services: []
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitError("Failed to submit the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-eyebrow">CONTACT NECTARSHELL</span>

          <h1>Let's Build Something Great Together</h1>

          <p>
            Whether you need technology solutions, accounting expertise,
            or complete digital transformation, our team is ready to help.
          </p>
        </div>
      </section>


      {/* Contact Section */}
      <section className="contact-section">

        {/* Form */}
        <div className="contact-form-wrapper">

          <div className="contact-section-heading">
            <span>GET IN TOUCH</span>
            <h2>Send us a message</h2>
            <p>
              Tell us a little about your requirements and our team
              will get back to you.
            </p>
          </div>

          {submitSuccess && (
            <div style={{ backgroundColor: "#d4edda", color: "#155724", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
              Thank you! Your message has been sent successfully. We will get back to you soon.
            </div>
          )}

          {submitError && (
            <div style={{ backgroundColor: "#f8d7da", color: "#721c24", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
              {submitError}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="firstName">First name</label>

                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="lastName">Last name</label>

                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

            </div>


            <div className="contact-field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>


            <div className="contact-field">
              <label htmlFor="phone">Phone number</label>

              <input
                id="phone"
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>


            <div className="contact-field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>


            <div className="contact-services">

              <label>What can we help you with?</label>

              <div className="contact-checkbox-grid">

                {availableServices.map((serviceName) => (
                  <label key={serviceName}>
                    <input
                      type="checkbox"
                      checked={formData.services.includes(serviceName)}
                      onChange={() => handleServiceChange(serviceName)}
                    />
                    <span>{serviceName}</span>
                  </label>
                ))}

              </div>

            </div>


            <button type="submit" className="contact-submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <span>→</span>}
            </button>

          </form>

        </div>


        {/* Right Side */}
        <aside className="contact-details">

          <div className="contact-details-intro">
            <span>LET'S CONNECT</span>

            <h2>Have a project in mind?</h2>

            <p>
              We're here to understand your requirements and
              help you find the right technology and business solution.
            </p>
          </div>


          <div className="contact-detail-item">

            <div className="contact-detail-number">
              01
            </div>

            <div>
              <span>EMAIL</span>
              <a href="mailto:nectarshellemail.com">
                nectarshellemail.com
              </a>
            </div>

          </div>


          <div className="contact-detail-item">

            <div className="contact-detail-number">
              02
            </div>

            <div>
              <span>PHONE</span>
              <p>Phone number</p>
            </div>

          </div>


          <div className="contact-detail-item">

            <div className="contact-detail-number">
              03
            </div>

            <div>
              <span>LOCATION</span>
              <p>Greater Noida</p>
            </div>

          </div>


          <div className="contact-detail-note">
            <strong>NectarShell</strong>

            <p>
              Technology and financial expertise working
              together to help businesses operate smarter.
            </p>
          </div>

        </aside>

      </section>

    </main>
  );
};

export default Contact;