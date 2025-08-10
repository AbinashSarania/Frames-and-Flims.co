import React from "react";
import contactImage from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_31.jpg"; // Replace with your actual contact image
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
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
        <h2 className="text-3xl font-semibold mb-6">Contact Me.</h2>
        <p className="text-gray-700 mb-8">
          I’m here to capture your most special moments. Whether it's a wedding,
          engagement, or any other cherished event — let’s connect and make it
          happen.
        </p>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-[#8E6B3E] text-xl mt-1" />
            <p className="text-gray-800">123 Wedding Lane, Dream City, India</p>
          </div>

          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-[#8E6B3E] text-xl mt-1" />
            <p className="text-gray-800">+91 98765 43210</p>
          </div>

          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-[#8E6B3E] text-xl mt-1" />
            <p className="text-gray-800">hello@yourphotography.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
