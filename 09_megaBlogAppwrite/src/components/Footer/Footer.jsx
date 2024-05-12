import React from 'react';
import Logo from '../Logo'; 


import githubLogo from '../../assets/github-logo.png';
import linkedinLogo from '../../assets/linkedin-logo.png';

const Footer = () => {
  return (
    // {Todo: make appropiaate position for footer}
    <footer className="py-8 bg-black text-white w-full">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <dir style={{ marginRight: '50px' }} >
            <Logo width="100px" />
        </dir>
        
        <ul className="flex flex-wrap justify-center items-center gap-6">
          <li className="text-sm">
            <span className="text-white cursor-pointer hover:underline mr-4">Contact Us</span>
            <span className="text-white cursor-pointer hover:underline mr-4">Terms of Service</span>
            <span className="text-white cursor-pointer hover:underline">Privacy Policy</span>
          </li>
        </ul>
        <div className="flex gap-4">
          <a href="https://github.com/PritiParkhe" className="text-white hover:underline" >
            <img src={githubLogo} alt="GitHub" className="h-6" style={{ visibility: 'visible' }} />
          </a>
          <a href="https://www.linkedin.com/in/priti-parkhe/" className="text-white hover:underline" >
            <img src={linkedinLogo} alt="LinkedIn" className="h-6" style={{ visibility: 'visible' }} />
          </a>
        </div>
        <div className="text-sm text-gray-600">
          &copy; 2024 YourCompanyName. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;