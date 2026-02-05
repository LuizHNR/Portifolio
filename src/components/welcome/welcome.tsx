"use client";

import { useEffect, useRef } from "react";
import styles from "./welcome.module.css";

export default function Welcome() {
  const dashRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!dashRef.current) return;

      const maxScroll = window.innerHeight;
      const progress = Math.min(window.scrollY / maxScroll, 1);

      const minWidth = 0;              // começa colado
      const maxWidth = window.innerWidth * 0.8; // quase tela inteira

      const width = minWidth + (maxWidth - minWidth) * progress;

      dashRef.current.style.width = `${width}px`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.welcomeSection}>
      <h1>Wel</h1>
      <span ref={dashRef} className={styles.dash} />
      <h1>come</h1>
    </section>
  );
}
