import React, { useState } from "react";
import contactImage from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_31.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    services: [],
    message: ""
  });

  const servicesList = [
    "Destination",
    "Couples",
    "Film",
    "Video",
    "Elopements",
    "Engagements",
    "Weddings",
    "Others"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        if (checked) {
          return { ...prev, services: [...prev.services, value] };
        } else {
          return { ...prev, services: prev.services.filter((s) => s !== value) };
        }
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919876543210"; // Replace with your WhatsApp number (without +)
    const message = `New Wedding Booking Inquiry:%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Date: ${formData.date}%0A
Time: ${formData.time}%0A
Services: ${formData.services.join(", ")}%0A
Message: ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="flex flex-col p-10 py-20 md:flex-row bg-[#f4efdf] min-h-screen">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-96 md:h-auto">
        <img
          src={contactImage}
          alt="wedding couple"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 px-2 py-10 md:py-16 md:px-16 bg-[#f4efdf] flex flex-col justify-center">
        <h5 className="text-sm tracking-wider uppercase text-gray-600 mb-2">
          I'd love to tell your story
        </h5>
        <h2 className="text-3xl font-semibold mb-6">Book Your Wedding Session</h2>
        <p className="text-gray-700 mb-8">
          I’m here to capture your most special moments. Fill in your details and let's make it happen.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 focus:outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 focus:outline-none"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 focus:outline-none"
            required
          />

          {/* Date and Time */}
          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 focus:outline-none"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 focus:outline-none"
              required
            />
          </div>

          {/* Services Checkboxes */}
          <div>
            <p className="mb-2 font-medium">Select Services:</p>
            <div className="grid grid-cols-2 gap-2">
              {servicesList.map((service, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleChange}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Additional Details"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 focus:outline-none"
            rows="4"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full p-3 bg-[#8E6B3E] text-white font-semibold uppercase hover:bg-[#7a592d]"
          >
            Send via WhatsApp
          </button>
        </form>

        {/* Contact Info Below Form */}
        <div className="mt-10 border-t border-gray-300 pt-6">
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>

          {/* Address */}
          <div className="flex items-center mb-3">
            <FaMapMarkerAlt className="text-[#8E6B3E] mr-3" />
            <p>123 Wedding Lane, Guwahati, Assam, India</p>
          </div>

          {/* Phone */}
          <div className="flex items-center mb-3">
            <FaPhoneAlt className="text-[#8E6B3E] mr-3" />
            <p>+91 98765 43210</p>
          </div>

          {/* Email */}
          <div className="flex items-center mb-3">
            <FaEnvelope className="text-[#8E6B3E] mr-3" />
            <p>info@framesandfilms.co</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-2xl text-[#8E6B3E]">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href={`https://wa.me/919876543210`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
