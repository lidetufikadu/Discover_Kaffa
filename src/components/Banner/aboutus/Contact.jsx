import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    // Name validation (Only letters allowed)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Only letters are allowed';
    }

    // Phone validation (Only numbers, must be 10 digits)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    if (!validateForm()) {
      e.preventDefault(); // Stop submission if validation fails
    }
  };

  return (
    <main className="container py-5" style={{ background: '#D9EAFD' }}>
      <section id="contact" className="text-center">
        <h2 style={{ color: '#007bff', fontWeight: 'bold', marginBottom: '20px', marginTop: '40px' }}>Get in Touch</h2>
        <p className="mb-4">
          Have questions or want to learn more about Kaffa?
        </p>
        <p className="mb-4">
          Fill out the form below or reach out to us using the contact information provided.
        </p>
        {/* Contact Form */}
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST"
          className="mx-auto border p-4 shadow rounded bg-light"
          style={{ maxWidth: '500px', textAlign: 'left' }}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="access_key" value="51c67798-b085-4efe-a2d8-2c7f40052a60" />

          {/* Name Input */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          {/* Phone Number Input */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number:</label>
            <input 
              type="text" 
              id="phone" 
              name="phone" 
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`} 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Message Input */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              className={`form-control ${errors.message ? 'is-invalid' : ''}`} 
              rows="4" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>

        {/* Contact Information */}
        <div className="mt-5 text-left mx-auto p-4 border shadow rounded bg-light" style={{ maxWidth: '500px' }}>
          <h3 className="text-left" style={{ color: '#007bff' }}>Contact Information</h3>
          <p><FaEnvelope /> <strong>Email:</strong> lidetufikadu54@gmail.com</p>
          <p><FaPhone /> <strong>Phone:</strong> +251927086860</p>
          <p><FaMapMarkerAlt /> <strong>Address:</strong> Bonga, Kaffa, Ethiopia</p>
        </div>

        {/* Footer */}
        <footer className="bg-primary text-white text-center py-3 mt-5">
          <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
          <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
        </footer>
      </section>
    </main>
  );
};

export default Contact;
