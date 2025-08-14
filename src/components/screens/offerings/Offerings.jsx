import React from "react";
import bgImage from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_35.jpg"; // Make sure the path is correct
import OurProcess from "./OurProcess";
import FAQSection from "./FAQSection";
import useInView from "../../hooks/useInView";

export default function Offerings() {
  const offerings = [
    {
      title: "Deluxe weddings.",
      price: "$4,500.00 USD",
      includes: [
        "Sed viverra vehicula dictum.",
        "Proin magna tellus, vehicula ne.",
        "Rutrum vitae, mattis malesuada risus.",
        "Morbi sed dui in mi placerat tincidunt.",
      ],
    },
    {
      title: "Standard weddings.",
      price: "$3,000.00 USD",
      includes: [
        "Curabitur commodo nulla sed.",
        "Vestibulum ante ipsum primis.",
        "Ut dignissim, nulla id fermentum.",
        "Integer eu leo nec sapien porttitor.",
      ],
    },
    {
      title: "Elopement Package.",
      price: "$2,000.00 USD",
      includes: [
        "Compact coverage, perfect for intimate settings.",
        "Flexible travel availability.",
        "High-resolution image delivery.",
        "Online gallery + printing rights.",
      ],
    },
    {
      title: "Engagement Session.",
      price: "$750.00 USD",
      includes: [
        "Up to 2 hours of photography.",
        "Multiple outfit changes.",
        "Pre-shoot consultation.",
        "Online gallery with downloadable images.",
      ],
    },
  ];

  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  return (
    <>
      <section className="bg-[#eae1cf] text-black">
        <OurProcess />
        {/* Hero Banner */}
        <div
          className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white mb-16"
          style={{ backgroundImage: `url(${bgImage})` }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

          {/* Animated Text */}
          <div className="relative z-10 p-6 text-center max-w-3xl space-y-4">
            <p
              ref={ref1}
              className={`uppercase text-sm tracking-widest font-semibold text-white/80 transform transition-all duration-700 ease-out ${
                inView1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}>
              South Florida Photographer
            </p>

            <h2
              ref={ref2}
              className={`text-4xl md:text-5xl font-semibold text-white transform transition-all duration-700 ease-out delay-200 ${
                inView2
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}>
              My Offerings.
            </h2>

            <p
              ref={ref3}
              className={`text-white/90 text-sm sm:text-base transform transition-all duration-700 ease-out delay-400 ${
                inView3
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua t enim
              ad minim veniam.
            </p>
          </div>
        </div>

        {/* Offerings List */}
        <div className="max-w-6xl mx-auto px-6 md:px-20 pb-16 space-y-12">
          {offerings.map((offer, idx) => (
            <div
              key={idx}
              className={`${
                idx === 0 ? "border-t" : ""
              } border-b border-gray-400 py-10 md:flex justify-between items-start gap-8`}>
              <div className="md:w-1/2">
                <p className="text-xl font-light mb-1">0{idx + 1}.</p>
                <h3 className="text-2xl md:text-3xl font-medium">
                  {offer.title}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide">
                  Starting at {offer.price}
                </p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h4 className="font-semibold uppercase text-sm mb-3">
                  Includes
                </h4>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  {offer.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <FAQSection />
    </>
  );
}
