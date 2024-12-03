"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import './SideBar.css';

const Sidebar = ({ onTag }: { onTag: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="lg:hidden flex justify-between items-center p-4">
        <button onClick={toggleSidebar} className="text-primary-color">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`sidebar bg-primary-color text-secondary-color h-screen flex flex-col w-64 fixed lg:relative top-0 bottom-0 transition-all duration-300 ${isOpen ? 'left-0' : '-left-64'} lg:left-0 lg:flex lg:flex-col`}
      >
        <div className={`flex justify-end transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
          <button onClick={toggleSidebar} className="text-secondary-color">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          </button>
        </div>

        <div className="flex items-center justify-center p-4 text-xl font-semibold">
          <Image
            src="/logo.jpg"
            alt="G-Score Logo"
            width={50}
            height={50}
          />
          <span className="text-3xl ml-2">G-Score</span>
        </div>

        <div className="flex-grow">
          <ul className="space-y-6 p-4 flex-col">
            <li
              className={`flex items-center space-x-4 rounded-md ${onTag === 1 ? "bg-secondary-color text-primary-color" : ""}`}
            >
              <Link
                href="/"
                className="flex items-center w-full p-3"
              >
                <Image
                  src="/logo.jpg"
                  alt="Dashboard Icon"
                  width={20}
                  height={20}
                />
                <span className="flex-1 ml-3">Dashboard</span>
              </Link>
            </li>

            <li
              className={`flex items-center space-x-4 rounded-md ${onTag === 2 ? "bg-secondary-color text-primary-color" : ""}`}
            >
              <Link
                href="/search"
                className="flex items-center w-full p-3"
              >
                <Image
                  src="/logo.jpg"
                  alt="Search Scores Icon"
                  width={20}
                  height={20}
                />
                <span className="flex-1 ml-3">Search Scores</span>
              </Link>
            </li>

            <li
              className={`flex items-center space-x-4 rounded-md ${onTag === 3 ? "bg-secondary-color text-primary-color" : ""}`}
            >
              <Link
                href="/report"
                className="flex items-center w-full p-3"
              >
                <Image
                  src="/logo.jpg"
                  alt="Reports Icon"
                  width={20}
                  height={20}
                />
                <span className="flex-1 ml-3">Reports</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-0">
          <ul className="space-y-6 p-4 flex-col">
            <li
              className={`flex items-center space-x-4 rounded-md ${onTag === 4 ? "bg-secondary-color text-primary-color" : ""}`}
            >
              <Link
                href="/settings"
                className="flex items-center w-full p-3"
              >
                <Image
                  src="/logo.jpg"
                  alt="Settings Icon"
                  width={20}
                  height={20}
                />
                <span className="flex-1 ml-3">Settings</span>
              </Link>
            </li>

            <li
              className={`flex items-center space-x-4 rounded-md ${onTag === 5 ? "bg-secondary-color text-primary-color" : ""}`}
            >
              <Link
                href="/logout"
                className="flex items-center w-full p-3"
              >
                <Image
                  src="/logo.jpg"
                  alt="Logout Icon"
                  width={20}
                  height={20}
                />
                <span className="flex-1 ml-3">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
