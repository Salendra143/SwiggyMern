import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-5">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Sections */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Company Section */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4">Company</h2>
            <ul>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">Swiggy Blog</a></li>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Help & Support Section */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4">Help & Support</h2>
            <ul>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">FAQs</a></li>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">Partner Support</a></li>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">Partnering with Us</a></li>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">Report an Issue</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4">Legal</h2>
            <ul>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">Cookie Policy</a></li>
              <li className="mb-2"><a href="#" className="text-sm sm:text-base md:text-lg hover:underline">Security</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/salendra-singh143/" target='_blank'  className=" text-[2rem] hover:text-gray-200 active:text-gray-400">
              <FaLinkedin/>
              </a>
              <a href="https://github.com/Salendra143" target='_blank' className="text-[2rem] hover:text-gray-200 active:text-gray-400">
              <FaGithub/>
              </a>
              <a href="https://salendra-portfolio.netlify.app/" target='_blank' className="text-[1.5rem] hover:text-gray-200 active:text-gray-400">
                <p>Portfolio</p>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-center sm:text-left text-xs sm:text-sm md:text-base text-gray-400">&copy; 2024 Swiggy. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-xs sm:text-sm md:text-base text-gray-400 hover:underline">Privacy</a>
            <a href="#" className="text-xs sm:text-sm md:text-base text-gray-400 hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
