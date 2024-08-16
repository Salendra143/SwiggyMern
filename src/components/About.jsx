import React from 'react';

const About = () => {
  return (
    <div className=" py-12 px-6 lg:px-24">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Swiggy is India's largest and highest-valued online food ordering and delivery platform. 
          Founded in 2014, Swiggy is based in Bengaluru, and operates in 500 cities in India.
          The company aims to redefine the food ordering experience by providing a wide range of choices, 
          fast delivery, and exceptional service.
        </p>
        <p className="text-gray-600 mb-6 text-lg">
          Our mission is to bring unparalleled convenience to our customers and ensure that their favorite meals 
          are just a few clicks away. We strive to partner with the best restaurants to provide a wide range 
          of culinary options to our users, delivered right to their doorsteps.
        </p>
        <p className="text-gray-600 text-lg">
          As we continue to grow, we remain committed to improving our service, 
          expanding our reach, and innovating the food delivery space.
        </p>
      </div>
    </div>
  );
};

export default About;
