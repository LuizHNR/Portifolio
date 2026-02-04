"use client";

import { useEffect, useState } from "react";

export function SaoPauloClock() {
  const [time, setTime] = useState("");

  useEffect(() => {

    const updateTime = () => {
        
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{time}</p>;
}
