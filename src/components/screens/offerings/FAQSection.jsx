import React, { useState, useRef, useEffect } from "react";
import leftImage from "../../../assets/Ridoon and Barnali/Ridoon_and_Barnali_51.jpg";
import rightImage from "../../../assets/Nitesh and Niyati/Nitesh_and_Niyati_11.jpg";

export default function FAQSection() {
  const faqs = [
    {
      question: "This is a question?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua t enim ad minim veniam.",
    },
    {
      question: "This is a question?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      question: "This is a question?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    // Close all other answers smoothly when a new one opens
    answerRefs.current.forEach((ref, i) => {
      if (ref) {
        if (i === activeIndex) {
          ref.style.maxHeight = ref.scrollHeight + "px";
        } else {
          ref.style.maxHeight = "0px";
        }
      }
    });
  }, [activeIndex]);

  return (
    <section className="bg-[#FAF6EC] text-black">
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 pt-20 pb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Frequently asked questions.
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#c9bda4] pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center cursor-pointer text-lg md:text-xl font-medium focus:outline-none">
                <span>{faq.question}</span>
                <span className="text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: index === activeIndex ? "500px" : "0px" }}>
                <p className="mt-4 text-sm text-[#333] opacity-80 transform transition duration-500">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 py-16 px-4 md:px-24">
        {/* Left Image */}
        <img
          src={leftImage}
          alt="left visual"
          className="w-full max-w-[350px] aspect-square md:w-40 md:h-60 sm:md:w-56 sm:md:h-72 object-cover rounded md:ml-[-4rem]"
        />

        {/* Text */}
        <div className="text-center my-8 md:my-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">
            Capturing love stories in <br />
            South Florida and abroad.
          </h2>
          <button className="mt-2 bg-[#8E6B3E] text-white px-6 py-2 text-sm font-semibold rounded hover:bg-[#7a582c] transition">
            SUBMIT AN INQUIRY
          </button>
        </div>

        {/* Right Image */}
        <img
          src={rightImage}
          alt="right visual"
          className="w-full max-w-[350px] aspect-square md:w-40 md:h-60 sm:md:w-56 sm:md:h-72 object-cover rounded md:mr-[-4rem]"
        />
      </div>
    </section>
  );
}
