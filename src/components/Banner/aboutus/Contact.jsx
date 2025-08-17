import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Only letters are allowed';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

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
      e.preventDefault();
    }
  };

  return (
    <main className="container py-5" style={{ background: '#D9EAFD' }}>
      <section id="contact" className="text-center">
        <h2 style={{ color: '#007bff', fontWeight: 'bold', marginBottom: '15px', marginTop: '30px' }}>
          Get in Touch
        </h2>
        <p className="mb-2">Have questions or want to learn more about Kaffa?</p>
        <p className="mb-4">
          Fill out the form below or reach out to us using the contact information provided.
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mx-auto border p-4 shadow-sm rounded-4 bg-light"
          style={{ maxWidth: '500px', textAlign: 'left' }}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="access_key" value="51c67798-b085-4efe-a2d8-2c7f40052a60" />

          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-control shadow-sm rounded-3 ${errors.name ? 'is-invalid' : ''}`}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-semibold">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className={`form-control shadow-sm rounded-3 ${errors.phone ? 'is-invalid' : ''}`}
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control shadow-sm rounded-3 ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Message */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-semibold">Message:</label>
            <textarea
              id="message"
              name="message"
              className={`form-control shadow-sm rounded-3 ${errors.message ? 'is-invalid' : ''}`}
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-3 shadow-sm"
            style={{ fontWeight: '600', padding: '10px' }}
          >
            Submit
          </button>
        </form>

        {/* Contact Info */}
        <div
          className="mt-5 mx-auto p-4 border shadow-sm rounded-4 bg-light"
          style={{ maxWidth: '500px', textAlign: 'left' }}
        >
          <h3 className="fw-bold mb-3" style={{ color: '#007bff' }}>Contact Information</h3>
          <p className="mb-2"><FaEnvelope className="me-2" /> <strong>Email:</strong> lidetufikadu54@gmail.com</p>
          <p className="mb-2"><FaPhone className="me-2" /> <strong>Phone:</strong> +251927086860</p>
          <p><FaMapMarkerAlt className="me-2" /> <strong>Address:</strong> Bonga, Kaffa, Ethiopia</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
