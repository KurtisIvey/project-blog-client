import React from "react";

const Footer = () => {
  return (
    <footer className="container flex flex-wrap items-center justify-between mx-auto  md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 fixed inset-x-0 bottom-0">
      <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          I.V.Coding™
        </a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-xs  text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Github
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Linkedin
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;