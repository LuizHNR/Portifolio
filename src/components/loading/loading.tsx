"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./loading.module.css";

export default function Loading() {
  const [leaving, setLeaving] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setLeaving(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function getTitle() {
    if (pathname === "/") return "Home";
    if (pathname === "/work") return "Work";
    if (pathname === "/about") return "About";
    if (pathname === "/contact") return "Contact";

    return "Loading";
  }

  return (
    <div
      className={`${styles.loading} ${
        leaving ? styles.leave : styles.enter
      }`}
    >
      <h1>{getTitle()}</h1>

      <div className={styles.dots}>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
