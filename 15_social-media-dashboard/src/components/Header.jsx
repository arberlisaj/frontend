import { useEffect, useState } from "react";
import { followers } from "../data";
const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const totalFollowers = followers.reduce((total, f) => total + f.followers, 0);

  return (
    <header className="lg:flex lg:justify-between lg:items-center max-w-[1200px] mx-auto py-3 mb-4 text-darkGrayishBlue">
      <div>
        <h1 className="font-bold text-2xl dark:text-veryPaleBlue">
          Social Media Dashboard
        </h1>
        <p className="text-darkGrayishBlue">
          Total Followers: {totalFollowers.toLocaleString()}
        </p>
      </div>
      <hr className="lg:hidden my-3 border-gray-300" />
      <div className="flex items-center gap-2 justify-between lg:justify-start">
        <p>Dark Mode</p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </div>
    </header>
  );
};

export default Header;
