"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    // Function to update the date and time
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) +
          " " +
          now.toLocaleTimeString("en-US", { hour12: false })
      );
    };

    // Initial call to set the current date and time
    updateDateTime();

    // Set interval to update every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="text-grey-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 text-black">
          <span>{currentDateTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
          <Link
            href="/"
            className="mr-5 hover:text-blue-500 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="mr-5 hover:text-blue-500 transition-colors duration-300 transform hover:scale-105"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="mr-5 hover:text-blue-500 transition-colors duration-300 transform hover:scale-105"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="mr-5 hover:text-blue-500 transition-colors duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
