import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-800 text-white py-3">
      <div className="container mx-auto text-center">
        <p className="text-sm">Earth &copy; {currentYear}</p>
      </div>
    </div>
  );
};

export default Footer;
