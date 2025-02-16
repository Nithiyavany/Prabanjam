import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since there's no backend, we'll just alert the form submission.
    alert("Form submitted!");
  
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="container">
      <h1 className="header">Contact Us</h1>
      <div className="row">

        {/* Left Column: Contact Information & Map */}
        <div className="column">
          <h2>Get in Touch</h2>
          <p>
            Have any questions? We'd love to hear from you. Reach out using the methods below.
          </p>
          <ul>
            <li><strong>Address:</strong> 123 Main Street, City, Country</li>
            <li><strong>Phone:</strong> (+1) 123-456-7890</li>
            <li><strong>Email:</strong> info@example.com</li>
          </ul>
          <div style={{ marginTop: "1rem" }}>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17494.18397264844!2d-79.520620059878!3d43.61601633134635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1739558734764!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>
        
        {/* Right Column: Contact Form */}
        <div className="column">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" required value={formData.name} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email"  id="email" name="email" className="form-control" placeholder="Your Email" required value={formData.email} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject" required value={formData.subject} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" className="form-control" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
