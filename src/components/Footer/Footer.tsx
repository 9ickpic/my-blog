import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 border-t">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center text-sm">
        <p className="mb-2">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
