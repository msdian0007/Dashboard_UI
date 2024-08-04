import { Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { useHelper } from "../../hooks/useHelper";

export const Profile = () => {
  const { getProfileInitials } = useHelper();

  return (
    <>
      <Avatar className="bg-blue-500" size="default" gap="1">
        {getProfileInitials("Mohasin Attar")}
      </Avatar>
    </>
  );
};
