"use client";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";

import IconSun from "../../../icons/sun-icon.jsx";
import IconMoon from "../../../icons/moon-icon.jsx";

export default function NavbarTime() {
  const [currentTime, setCurrentTime] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const updateTime = () => {
      const timeNY = DateTime.now()
        .setZone("Asia/Jakarta")
        .setLocale("id")
        .toFormat("HH:mm");
      setCurrentTime(timeNY);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null;

  return (
    <div className=" m-auto grid grid-cols-[40%_60%]">
      <span
        aria-label={
          currentTime >= "06:00" && currentTime < "18:00" ? "Siang" : "Malam"
        }
      >
        {currentTime.hour > 6 && currentTime.hour < 18 ? (
          <IconSun />
        ) : (
          <IconMoon />
        )}
      </span>
      <time dateTime={currentTime}>
        <p>{currentTime}</p>
      </time>
    </div>
  );
}
