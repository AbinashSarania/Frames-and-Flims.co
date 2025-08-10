import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home2 from "./components/screens/home2/Home2";
import Offerings from "./components/screens/offerings/Offerings";
import Gallery from "./components/screens/gallery/Gallery";
import Footer2 from "./components/footer/Footer2";
import AboutUs from "./components/screens/about/AboutUs";
import ContactUs from "./components/screens/contactus/ContactUs";
import NiteshNiyatiGallery from "./components/screens/gallery/NiteshNiyatiGallery";
import RidoonBarnaliGallery from "./components/screens/gallery/RidoonBarnaliGallery";
import { FaWhatsapp } from "react-icons/fa"; // install if needed: npm install react-icons

function App() {
  return (
    <Router>
      <div className="min-h-screen scroll-smooth relative">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/gallery/nitesh-niyati"
            element={<NiteshNiyatiGallery />}
          />
          <Route
            path="/gallery/ridoon-barnali"
            element={<RidoonBarnaliGallery />}
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

        <Footer2 />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890" // Replace with your number (no '+' or spaces)
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors z-50">
          <FaWhatsapp className="text-white text-3xl" />
        </a>
      </div>
    </Router>
  );
}

export default App;
