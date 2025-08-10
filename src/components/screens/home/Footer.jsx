const Footer = () => {
    return (
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Three-column layout with vertical dividers */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between border-t border-b border-white py-8 relative">
            {/* Vertical lines */}
            <div className="absolute inset-y-0 left-1/3 w-px bg-white hidden md:block"></div>
            <div className="absolute inset-y-0 left-2/3 w-px bg-white hidden md:block"></div>
  
            {/* Contact Section */}
            <div className="w-full md:w-1/3 text-center md:text-left px-4">
              <h3 className="text-lg font-semibold">CONTACT</h3>
              <p className="mt-2">info@ethanparker.com</p>
              <p>034 7394 0348</p>
              <p>085 7394 0348</p>
            </div>
  
            {/* Stalk Section */}
            <div className="w-full md:w-1/3 text-center px-4">
              <h3 className="text-lg font-semibold">STALK</h3>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Pinterest</a></li>
                <li><a href="#" className="hover:underline">Unsplash</a></li>
              </ul>
            </div>
  
            {/* Links for Later */}
            <div className="w-full md:w-1/3 text-center md:text-right px-4">
              <h3 className="text-lg font-semibold">LINKS FOR LATER</h3>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:underline">Style Guide</a></li>
                <li><a href="#" className="hover:underline">Licensing</a></li>
                <li><a href="#" className="hover:underline">Change Log</a></li>
                <li><a href="#" className="hover:underline">Instructions</a></li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Text */}
          <div className="text-center mt-8">
            <h2 className="text-5xl font-extrabold">LET’S CLICK</h2>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  