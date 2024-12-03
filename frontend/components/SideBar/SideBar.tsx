import Link from "next/link";
import Image from "next/image";
import './SideBar.css';

const Sidebar = ({ onTag }: { onTag: number }) => {
  return (
    <div className="sidebar bg-primary-color text-secondary-color h-screen flex flex-col lg:w-1/4 w-64 lg:max-w-64">
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
  );
};

export default Sidebar;
