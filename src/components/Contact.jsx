
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <h2 className="mt-4 mb-3 text-center" style={{ color: 'White', fontWeight: 'bolder' }}>
        Contact Us
      </h2>
    <div className="container  text-white" id="contact">
      
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <div className="p-4 rounded">
            <h4 style={{ fontWeight: 'bolder' }}>Contact Information</h4>
            <p>
              <FaMapMarkerAlt /> <strong>Address:</strong> {contactInfo.address}
            </p>
            <p>
              <FaEnvelope /> <strong>Email:</strong> {contactInfo.contactEmail}
            </p>
            <p>
              <FaPhone /> <strong>Phone:</strong> {contactInfo.phoneNumber}
            </p>
          </div>
        </div>
        <div className="col-md-6 mt-4 ">
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded" style={{ mWidth: '25rem' }}>
            <div className="form-group">
              <label htmlFor="name" className="title">
                Name
              </label>
              <input
                type="text"
                className="form-control thick"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="title">
                Email address
              </label>
              <input
                type="email"
                className="form-control thick"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group message">
              <label htmlFor="message" className="title">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" style={{ backgroundColor: '#105343', color: 'white', border: 'none', padding: '10px 20px', fontWeight: 'bolder', borderRadius: '4px' }} className="btn btn-primary mt-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
