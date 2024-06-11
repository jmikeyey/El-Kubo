"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

interface TimerProps {
  time: string | undefined;
}

const Timer: React.FC<TimerProps> = ({ time }) => {
  const [elapsedTime, setElapsedTime] = useState<string>("");
  const [badgeColor, setBadgeColor] = useState<string>("");
  useEffect(() => {
    if (!time) return;

    const updateElapsedTime = () => {
      const startTime = new Date(time).getTime();
      const currentTime = new Date().getTime();
      const elapsed = currentTime - startTime;

      const hours = Math.floor(elapsed / (1000 * 60 * 60));
      const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

      let color = "green";
      if (minutes < 5) {
        color = "green";
      } else if (minutes < 10) {
        color = "yellow";
      } else {
        color = "red";
      }

      setBadgeColor(color);
      const formattedTime =
        hours > 0
          ? `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
              2,
              "0"
            )}:${String(seconds).padStart(2, "0")}`
          : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
              2,
              "0"
            )}`;

      setElapsedTime(formattedTime);
    };

    updateElapsedTime(); // Initialize immediately

    const intervalId = setInterval(updateElapsedTime, 1000); // Update every second
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [time]);

  return (
    <>
      <span className="text-sm mb-2">
        <span className={`bg-${badgeColor}-400 text-black rounded-full px-2`}>
          +{elapsedTime}
        </span>
      </span>
    </>
  );
};

export default Timer;
