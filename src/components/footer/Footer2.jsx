import React, { useState } from "react";
import FooterLogo from "../../assets/Navbar Logo.png"; // Adjust path if needed

const Footer2 = () => {
  const [email, setEmail] = useState("");
  const whatsappNumber = "911234567890"; // Replace with your WhatsApp number (with country code, no "+" sign)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    // Prepare WhatsApp message
    const message = `New subscriber email: ${email}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");

    // Clear input
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#7C5B31] text-[#F5EAD7] py-16 px-8 flex flex-col items-center">
      {/* Responsive layout: mobile center-first, desktop 3 columns */}
      <div className="w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-10">

        {/* Left - Navigation Links */}
        <div className="flex flex-col gap-2 items-center md:items-start w-full md:w-1/3">
          <a href="#" className="uppercase font-light hover:underline">Offerings</a>
          <a href="#" className="uppercase font-light hover:underline">Galleries</a>
          <a href="#" className="uppercase font-light hover:underline">About</a>
          <a href="#" className="uppercase font-light hover:underline">Contact</a>
        </div>

        {/* Center - Logo, Subtitle, Email Form */}
        <div className="text-center flex flex-col items-center w-full md:w-1/3">
          <img
            src={FooterLogo}
            alt="Frames and Films Logo"
            className="h-26 w-auto"
          />
          <p className="mt-4 text-lg">Let’s be email friends.</p>
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col items-center w-full max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 bg-transparent border border-[#F5EAD7] placeholder-[#F5EAD7] text-[#F5EAD7] focus:outline-none"
            />
            <button
              type="submit"
              className="w-full mt-4 p-3 bg-white text-[#7C5B31] font-bold uppercase hover:bg-opacity-80"
            >
              Get on the list
            </button>
          </form>
        </div>

        {/* Right - Social Links */}
        <div className="flex flex-col gap-2 items-center md:items-end w-full md:w-1/3">
          <a href="#" className="uppercase font-light hover:underline">Instagram</a>
          <a href="#" className="uppercase font-light hover:underline">Facebook</a>
          <a href="#" className="uppercase font-light hover:underline">Youtube</a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 text-xs text-center">
        <p>
          <a href="#" className="hover:underline">Privacy Policy</a> •
        </p>
        <p className="mt-2">
          Website by Uxify.online.
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
