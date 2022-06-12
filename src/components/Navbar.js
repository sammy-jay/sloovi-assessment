import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const selected = "bg-gray-200 rounded-full";
  const [isLight, setIsLight] = useState(true);
  const handleSwitch = (mode) => {
    switch (mode) {
      case "light":
        localStorage.setItem("theme", "light");
        setIsLight(true);
        break;
      case "dark":
        localStorage.setItem("theme", "dark");
        setIsLight(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsLight(false);
    } else {
      document.documentElement.classList.remove("dark");
      setIsLight(true);
    }
  }, [isLight]);
  return (
    <nav className="w-full justify-between items-center flex shadow-md bg-gray-200 py-2 px-3 dark:bg-slate-800 lg:px-5 lg:py-3 sticky top-0 z-10 ">
      <h1 className="font-bold text-3xl dark:text-gray-200 text-gray-900">
        Sloovi
      </h1>
      <div className="flex space-x-1 md:space-x-3 lg:space-x-6">
        <div className="bg-white rounded-full p-2 space-x-5 flex dark:bg-slate-900">
          <span
            className={`p-1 cursor-pointer ${isLight && selected}`}
            onClick={() => handleSwitch("light")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 font-bold dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
          <span
            className={`p-1 cursor-pointer ${!isLight && selected}`}
            onClick={() => handleSwitch("dark")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </span>
        </div>

        <div className="bg-white rounded-full w-[2px] space-x-1 hidden md:flex dark:bg-gray-300" />

        <div className="hidden md:flex flex-col items-end space-y-0">
          <h6 className="text-lg font-semibold dark:text-gray-200">
            {user?.name}
          </h6>
          <p className="text-sm dark:text-gray-400">{user?.email}</p>
        </div>

        <div className="flex justify-center items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 fill-current text-gray-600 dark:text-gray-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
