"use client";

import { useEffect, useRef } from "react";
import styles from "./welcome.module.css";
import { usePathname } from "next/navigation";

export default function Welcome() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const dashRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!dashRef.current) return;

      let progress = 0;

      // HOME → scroll global
      if (isHome) {
        const maxScroll = window.innerHeight;
        progress = Math.min(window.scrollY / maxScroll, 1);
      }
      // OUTRAS PÁGINAS → baseado na posição do componente
      else if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const start = viewportHeight * 0.5;
        const end = viewportHeight * 0.1;

        progress = Math.min(
          Math.max((start - rect.top) / (start - end), 0),
          1
        );
      }

      const maxWidth = window.innerWidth * 0.8;
      const factor = isHome ? 1 : 0.25;

      dashRef.current.style.width = `${maxWidth * progress * factor}px`;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <section
      ref={sectionRef}
      className={isHome ? styles.welcomeSection : styles.welcomeContact}
    >
      {isHome ? (
        <>
          <h1>Wel</h1>
          <span ref={dashRef} className={styles.dash} />
          <h1>come</h1>
        </>
      ) : (
        <>
          <h1>I</h1>
          <span ref={dashRef} className={styles.dashContact} />
          <h1 className={styles.label}>Graduated</h1>
        </>
      )}
    </section>
  );
}
