import React, { useEffect, useState } from "react";
import { CiClock2, CiMail } from "react-icons/ci";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    ampm: "AM",
    day: "",
    date: 0,
    month: "",
    year: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      // Time
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // 12-hour format

      // Date
      const day = now.toLocaleDateString("en-US", { weekday: "long" });
      const date = now.getDate();
      const month = now.toLocaleDateString("en-US", { month: "long" });
      const year = now.getFullYear();

      setTime({ hours, minutes, seconds, ampm, day, date, month, year });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedMinutes = time.minutes.toString().padStart(2, "0");
  const formattedSeconds = time.seconds.toString().padStart(2, "0");

  return (
    <header className="bg-gray-900 text-gray-200 py-3 px-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Phone & Email */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6 space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
            <IoCallOutline className="text-xl" />
            <span>+098-765-543-21</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
            <CiMail className="text-xl" />
            <span>info@example.com</span>
          </div>
        </div>

        {/* Center: Time & Date */}
        <div className="flex flex-col items-center my-2 md:my-0">
          <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
            <CiClock2 className="text-xl" />
            <span className="font-mono text-lg md:text-xl">
              {time.hours}:{formattedMinutes}:{formattedSeconds} {time.ampm}
            </span>
          </div>
          <div className="text-gray-400 text-sm md:text-base">
            {time.day}, {time.date} {time.month}, {time.year}
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-lg justify-end">
          <Link
            to={""}
            className="hover:text-blue-500 transition-colors transform hover:scale-110"
          >
            <FaFacebook />
          </Link>
          <Link
            to={""}
            className="hover:text-blue-700 transition-colors transform hover:scale-110"
          >
            <FaLinkedin />
          </Link>
          <Link
            to={""}
            className="hover:text-sky-400 transition-colors transform hover:scale-110"
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
