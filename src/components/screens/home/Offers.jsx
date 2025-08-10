import React from "react";
import Work1 from "../../../assets/Work (1).jpg";
import Work2 from "../../../assets/Work (2).jpg";
import Work3 from "../../../assets/Work (3).jpg";
import Work4 from "../../../assets/Work (4).jpg";

const Offers = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">OFFERS</h2>

        {/* Outer horizontal borders */}
        <div className="border-t border-b border-white relative">
          {/* Vertical Lines Touching Horizontal Borders */}
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white hidden md:block"></div>
          <div className="absolute top-0 bottom-0 left-2/3 w-px bg-white hidden md:block"></div>

          <div className="flex">
            {/* Portrait Set */}
            <div className="flex-1 p-8">
              <h3 className="text-2xl font-semibold mb-4">PORTRAIT SET</h3>
              <ul className="text-sm leading-6 mb-6">
                <li>Pre-Shoot Consultation</li>
                <li>Location Scouting</li>
                <li>Professional Photography Session</li>
                <li>Post-Processing and Editing</li>
                <li>High-Resolution Digital Images</li>
                <li>Online Gallery or Photo Album</li>
                <li>Print Release</li>
                <li>Timely Delivery</li>
              </ul>
              <img src={Work1} alt="Portrait Set" className="w-[400px] h-[500px] object-cover mx-auto mb-6" />
              <button className="border border-white px-8 py-3">BOOK NOW</button>
            </div>

            {/* Couple Set */}
            <div className="flex-1 p-8">
              <h3 className="text-2xl font-semibold mb-4">COUPLE SET</h3>
              <ul className="text-sm leading-6 mb-6">
                <li>Pre-Shoot Consultation</li>
                <li>Location Scouting</li>
                <li>Professional Photography Session</li>
                <li>Post-Processing and Editing</li>
                <li>High-Resolution Digital Images</li>
                <li>Online Gallery or Photo Album</li>
                <li>Print Release</li>
                <li>Timely Delivery</li>
              </ul>
              <img src={Work2} alt="Couple Set" className="w-[400px] h-[500px] object-cover mx-auto mb-6" />
              <button className="border border-white px-8 py-3">BOOK NOW</button>
            </div>

            {/* Fashion Set */}
            <div className="flex-1 p-8">
              <h3 className="text-2xl font-semibold mb-4">FASHION SET</h3>
              <ul className="text-sm leading-6 mb-6">
                <li>Pre-Shoot Consultation</li>
                <li>Location Scouting</li>
                <li>Professional Photography Session</li>
                <li>Post-Processing and Editing</li>
                <li>High-Resolution Digital Images</li>
                <li>Online Gallery or Photo Album</li>
                <li>Print Release</li>
                <li>Timely Delivery</li>
              </ul>
              <img src={Work3} alt="Fashion Set" className="w-[400px] h-[500px] object-cover mx-auto mb-6" />
              <button className="border border-white px-8 py-3">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>

      {/* New Section Below Offers with Proper Vertical Lines */}
      <section className="bg-black text-white py-16 px-8 md:px-20">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          EVERY PICTURE HAS A STORY TO TELL
        </h2>

        {/* First Row: Text - Image - Text with Vertical Dividers */}
        <div className="grid grid-cols-3 gap-8 relative border-t border-b border-white py-8">
          {/* Vertical Dividers */}
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white hidden md:block"></div>
          <div className="absolute top-0 bottom-0 left-2/3 w-px bg-white hidden md:block"></div>

          <p className="text-gray-400 leading-relaxed px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec aliquam risus. Quisque auctor dui ipsum, nec
            lacinia enim tincidunt ut. Sed porttitor cursus tincidunt. Cras turpis elit, suscipit ut scelerisque eget,
            luctus vel nunc.
          </p>

          <img
            src={Work4}
            alt="Story Image 1"
            className="w-full h-auto object-cover px-4"
          />

          <p className="text-gray-400 leading-relaxed px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel gravida ligula, id ullamcorper
            vehicula dui nec. Cras turpis elit, suscipit ut scelerisque eget, luctus vel nunc.
          </p>
        </div>

        {/* Second Row: Image - Text - Image with Vertical Dividers */}
        <div className="grid grid-cols-3 gap-8 relative border-t border-b border-white py-8 mt-12">
          {/* Vertical Dividers */}
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white hidden md:block"></div>
          <div className="absolute top-0 bottom-0 left-2/3 w-px bg-white hidden md:block"></div>

          <img
            src={Work1}
            alt="Story Image 2"
            className="w-full h-auto object-cover px-4"
          />

          <p className="text-gray-400 leading-relaxed px-4">
            Sed sodales nisi turpis, vel aliquam lacus pharetra non. Phasellus iaculis dignissim enim viverra scelerisque.
            Ut porttitor enim quis sem iaculis venenatis.
          </p>

          <img
            src={Work2}
            alt="Story Image 3"
            className="w-full h-auto object-cover px-4"
          />
        </div>
      </section>
    </section>
  );
};

export default Offers;
