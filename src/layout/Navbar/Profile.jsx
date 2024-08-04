import { Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { useHelper } from "../../hooks/useHelper";

export const Profile = () => {
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const { getProfileInitials } = useHelper();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Avatar
        // style={{
        //   backgroundColor: '',
        //   verticalAlign: "middle",
        // }}
        className="bg-blue-500"
        size="default"
        gap="1"
      >
        {getProfileInitials("Mohasin Attar")}
      </Avatar>
    </>
  );
};
