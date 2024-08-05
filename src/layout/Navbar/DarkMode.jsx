import React, { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";

export const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="cursor-pointer">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      />
      <label for="checkbox" class="checkbox-label bg-[--bg-l] ">
        <IoMdMoon className="text-sm fa-moon" />
        <MdWbSunny className="text-sm fa-sun" />
        <span className="ball !bg-[--desc]"></span>
      </label>
    </div>
  );
};
