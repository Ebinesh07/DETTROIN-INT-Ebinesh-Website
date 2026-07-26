import { useState } from "react";
import "./Contact.css";
import contactImage from "../assets/Images/contact-school.jpg";

import {
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let temp = {};

    if (!formData.name.trim()) {
      temp.name = "Name is required";
    }

    if (!formData.email.trim()) {
      temp.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      temp.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      temp.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      temp.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.message.trim()) {
      temp.message = "Message is required";
    }

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-blur contact-blur-one"></div>
      <div className="contact-blur contact-blur-two"></div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-tag">

            <FaGraduationCap />

            <span>CONTACT US</span>

          </div>

          <h2 className="contact-title">

            Let's Build Your Child's
            <span> Bright Future.</span>

          </h2>

          <p className="contact-description">
            Have questions about admissions, academics or campus life?
            Our team is always ready to guide you and help you make the
            right choice for your child's future.
          </p>

          <div className="contact-list">

            <div className="contact-item">

              <div className="contact-icon">

                <FaMapMarkerAlt />

              </div>

              <div>

                <h4>Campus Address</h4>

                <p>123 Education Street, Chennai, Tamil Nadu</p>

              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">

                <FaPhoneAlt />

              </div>

              <div>

                <h4>Call Us</h4>

                <p>+91 98765 43210</p>

              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">

                <FaEnvelope />

              </div>

              <div>

                <h4>Email</h4>

                <p>info@brightfuture.com</p>

              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">

                <FaClock />

              </div>

              <div>

                <h4>Working Hours</h4>

                <p>Monday - Saturday | 8:00 AM - 5:00 PM</p>

              </div>

            </div>

          </div>

        </div>

        <div className="contact-form-wrapper">

          <div className="contact-image-card">

            <img
              src={contactImage}
              alt="School"
              className="contact-image"
            />

          </div>

          <div className="contact-floating-card">

            <FaGraduationCap />

            <div>

              <h4>Admissions Open</h4>

              <span>Enroll Today</span>

            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && <small>{errors.name}</small>}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && <small>{errors.email}</small>}

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            {errors.phone && <small>{errors.phone}</small>}

            <textarea
              rows="5"
              name="message"
              placeholder="Write Your Message"
              value={formData.message}
              onChange={handleChange}
            />

            {errors.message && <small>{errors.message}</small>}

            <button type="submit">

              <FaPaperPlane />

              Send Message

              <FaArrowRight />

            </button>

            {success && (
              <div className="success-message">

                {success}

              </div>
            )}

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;