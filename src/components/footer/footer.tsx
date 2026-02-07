import Link from "next/link";
import { GoArrowDownLeft } from "react-icons/go";
import { SaoPauloClock } from "../time/saoPauloClock";

import { useEffect, useRef, useState } from "react";

import styles from "./footer.module.css";

export default function Footer() {
  
  const [copied, setCopied] = useState("");

  const knowMeRef = useRef<HTMLAnchorElement | null>(null);


  function copy(text: string) {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1500);
  }


  useEffect(() => {
    const element = knowMeRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(styles.animateIn);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);




  return (


    <footer className={styles.footer}>
      
      {/* Contact */}
      <section className={styles.contact}>
        <p>&lt;contact&gt;</p>

        <p>
          &emsp;Feel free to reach me on{" "}
          <Link href="https://www.linkedin.com/in/luiz-henrique-neri-reimberg-6ab0032b8/" target="_blank" className={`hover:text-[#A63131]`}>
            LinkedIn
          </Link>{" "}
          or{" "}
          <Link href="https://www.instagram.com/lu_lhnr/" target="_blank" className={`hover:text-[#A63131]`}>
            Instagram.
          </Link>
        </p>

        <p>&lt;/contact&gt;</p>
      </section>

      {/* Divider */}
      <section className={styles.divider}>
        <GoArrowDownLeft className={styles.icon} />

        <div className={styles.lineWrapper}>
          <hr />
          <Link ref={knowMeRef} href="/contact"
            className={styles.knowMe}
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const rect = el.getBoundingClientRect();

              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              // posição da bolinha
              el.style.setProperty("--x", `${x}px`);
              el.style.setProperty("--y", `${y}px`);

              // movimento do texto
              const moveX = (x - rect.width ) * 0.10;
              const moveY = (y - rect.height ) * 0.10;

              const text = el.querySelector("p");
              if (text) {
                text.style.transform = `translate(${moveX}px, ${moveY}px)`;
              }
            }}
            onMouseLeave={(e) => {
              const text = e.currentTarget.querySelector("p");
              if (text) {
                text.style.transform = "translate(0, 0)";
              }
            }}
          >
            <p>Get to know me</p>
          </Link>


        </div>
      </section>


      {/* Contact Info */}
      <address className={styles.address}>
        <p onClick={() => copy("luizhneri19@gmail.com")} className={styles.copy}>
          luizhneri19@gmail.com
          {copied === "luizhneri19@gmail.com" && (
            <span className={styles.copied}> ✓ Copiado</span>
          )}
        </p>

        <p onClick={() => copy("+55 11 97307-6649")} className={styles.copy}>
          +55 11 97307-6649
          {copied === "+55 11 97307-6649" && (
            <span className={styles.copied}> ✓ Copiado</span>
          )}
        </p>
      </address>


      {/* Footer Bottom */}
      <section className={styles.footerBottom}>
        <div>
          <p className={`text-gray-400 pb-2`}>Version</p>
          <p>2026 &copy; Edition</p>
        </div>

        <div>
          <p className={`text-gray-400 pb-2`}>Time São Paulo</p>
          <SaoPauloClock />
        </div>
      </section>

    </footer>
  );
}
