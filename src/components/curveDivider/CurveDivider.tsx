"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./curveDivider.module.css";

export default function CurveDivider() {
  const ref = useRef<HTMLDivElement>(null);

  const [targetProgress, setTargetProgress] = useState(0);
  const [smoothProgress, setSmoothProgress] = useState(0);

  const [mouseX, setMouseX] = useState(0);

  // === IntersectionObserver (define o alvo)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const raw = entry.intersectionRatio;
        const eased = Math.min(1, Math.max(0, raw * 1.4));
        setTargetProgress(eased);
      },
      {
        rootMargin: "-50% 0px -10% 0px",
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // === Suavização com requestAnimationFrame
  useEffect(() => {
    let raf: number;

    const animate = () => {
      setSmoothProgress((prev) => {
        const diff = targetProgress - prev;
        return prev + diff * 0.08; // controla a fluidez
      });

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, [targetProgress]);

  // === Mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    setMouseX(x - 0.5);
  };

  const vw =
  typeof window !== "undefined"
    ? Math.min(window.innerWidth, 1440)
    : 1440;

    // intensidade baseada na tela
    const intensity = vw < 768 ? 0.55 : 1;

    // curvas escaláveis
    const curveMain = 60 + smoothProgress * 240 * intensity;
    const curveBack = 40 + smoothProgress * 160 * intensity;

    // mouse mais sutil no mobile
    const offset = mouseX * 120 * intensity;

  return (
    <div
      ref={ref}
      className={styles.wrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouseX(0)}
    >
      {/* fundo */}
      <svg viewBox="0 0 1440 260" preserveAspectRatio="none" className={styles.back}>
        <path
          d={`
            M0,0
            C${360 + offset},${curveBack}
             ${1080 - offset},${curveBack}
             1440,0
            L1440,260
            L0,260
            Z
          `}
        />
      </svg>

      {/* frente */}
      <svg viewBox="0 0 1440 260" preserveAspectRatio="none" className={styles.front}>
        <path
          d={`
            M0,0
            C${360 - offset},${curveMain}
             ${1080 + offset},${curveMain}
             1440,0
            L1440,260
            L0,260
            Z
          `}
        />
      </svg>
    </div>
  );
}
