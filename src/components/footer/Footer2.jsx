import React from "react";

const Footer2 = () => {
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

        {/* Center - Title, Subtitle, Email Form */}
        <div className="text-center flex flex-col items-center w-full md:w-1/3">
          <h1 className="text-6xl sm:text-7xl font-semibold">VOW</h1>
          <p className="mt-4 text-lg">Let’s be email friends.</p>
          <form className="mt-6 flex flex-col items-center w-full max-w-md">
            <input
              type="email"
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
          <a href="#" className="uppercase font-light hover:underline">Pinterest</a>
          <a href="#" className="uppercase font-light hover:underline">TikTok</a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 text-xs text-center">
        <p>
          <a href="#" className="hover:underline">Privacy Policy</a> •
          <a href="#" className="hover:underline"> Styleguide</a> •
          <a href="#" className="hover:underline"> Changelog</a> •
          <a href="#" className="hover:underline"> Licenses</a>
        </p>
        <p className="mt-2">
          Website by Uxify.online.
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
