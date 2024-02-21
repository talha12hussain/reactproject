// src/components/ResponsiveLayout.jsx
import React from 'react';

const ResponsiveLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Image side */}
      <div className="lg:w-1/2">
        <img
          src="your-image-url.jpg"
          alt="Your Image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text side */}
      <div className="lg:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Your Text Heading</h1>
        <p className="text-gray-700">
          Your text content goes here. Customize the styles according to your needs using Tailwind CSS classes.
        </p>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
