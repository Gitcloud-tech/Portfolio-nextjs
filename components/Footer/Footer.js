"use client";
import { FaLinkedin, FaGithub, FaEnvelopeOpen } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-black dark:text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Gopal Patil. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/gitcloud-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
          >
            <FaEnvelopeOpen className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
