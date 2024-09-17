import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center sm:text-left">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-green-500 to-green-500 rounded-lg text-white">
              Digitalized
            </span>
            Ethnobotany
          </Link>
          <p className="text-gray-400 mb-6 mt-4">
            Exploring the rich heritage of plants and their uses in cultures
            around the world. Join us on this journey to learn and preserve the
            ethnobotanical knowledge passed down through generations.
          </p>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.991H7.897v-2.887h2.541V9.797c0-2.508 1.492-3.89 3.775-3.89 1.094 0 2.238.196 2.238.196v2.464h-1.261c-1.244 0-1.63.771-1.63 1.561v1.878h2.773l-.443 2.887h-2.33v6.991C18.344 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.29 20.251c7.548 0 11.675-6.155 11.675-11.49 0-.175-.004-.349-.012-.523A8.292 8.292 0 0022 5.92a8.19 8.19 0 01-2.357.631A4.114 4.114 0 0021.448 4.2a8.233 8.233 0 01-2.606.981 4.107 4.107 0 00-6.993 3.743 11.652 11.652 0 01-8.457-4.287 4.06 4.06 0 001.271 5.478A4.09 4.09 0 013 9.71v.051a4.106 4.106 0 003.292 4.021 4.093 4.093 0 01-1.853.07A4.108 4.108 0 007.72 17.83a8.233 8.233 0 01-5.09 1.753c-.33 0-.654-.019-.976-.056a11.615 11.615 0 006.29 1.841" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.9a4.1 4.1 0 110 8.2 4.1 4.1 0 010-8.2zm6.25-.55a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" />
                <circle cx="12" cy="12" r="2.9" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 016 6v5h-3v-5a3 3 0 00-6 0v5H10v-5a6 6 0 016-6zM6 9H3v12h3V9zM4.5 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Category
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">SignIn</a>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Visit Website
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="flex items-center justify-center sm:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:+12023459999" className="hover:text-white">
                +12345678908
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="digitalizedethnobotany@gmail.com"
                className="hover:text-white"
              >
                digitalizedethnobotany@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <address className="hover:text-white">
                Chitral University,
                <br />
                Seenlast, Chitral, 1122
              </address>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 border-t border-gray-700 pt-8">
        &copy; 2024 All Rights Reserved by{" "}
        <a href="/" className="text-blue-500 hover:underline">
          Digitalized Ethnobotany
        </a>
      </div>
    </footer>
  );
};

export default Footer;