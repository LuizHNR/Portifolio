"use client";

import { useEffect, useState } from "react";
import styles from "./loading.module.css";

export default function Loading() {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // inicia o fade-out logo antes de desmontar
    const timer = setTimeout(() => {
      setLeaving(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.loading} ${
        leaving ? styles.leave : styles.enter
      }`}
    >
      <h1>Home</h1>

      <div className={styles.dots}>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
