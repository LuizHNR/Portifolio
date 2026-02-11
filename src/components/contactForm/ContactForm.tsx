"use client";

import { useState } from "react";
import styles from "./contactForm.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "loading") return;

    const form = e.currentTarget;

    // Honeypot anti-bot
    const botField = (form.elements.namedItem("company") as HTMLInputElement)?.value;
    if (botField) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div className={styles.meContact}>

      <section className={styles.sectionDados}>
        <form id="contact-form" className={styles.form} onSubmit={handleSubmit}>

          <h1>Contact me</h1>

          {/* Honeypot */}
          <input
            type="text"
            name="company"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* NAME */}
          <div className={styles.waveGroup}>
            <input type="text" name="name" required minLength={2} className={styles.input} />
            <span className={styles.bar}></span>
            <label className={styles.label}>
              {"Name".split("").map((char, index) => (
                <span
                  key={index}
                  className={styles.labelChar}
                  style={{ "--index": index } as React.CSSProperties}
                >
                  {char}
                </span>
              ))}
            </label>
          </div>

          {/* EMAIL */}
          <div className={styles.waveGroup}>
            <input type="email" name="email" required className={styles.input} />
            <span className={styles.bar}></span>
            <label className={styles.label}>
              {"Email".split("").map((char, index) => (
                <span
                  key={index}
                  className={styles.labelChar}
                  style={{ "--index": index } as React.CSSProperties}
                >
                  {char}
                </span>
              ))}
            </label>
          </div>

          {/* MESSAGE */}
          <div className={styles.waveGroup}>
            <textarea name="message" required minLength={2} className={styles.textArea} />
            <span className={styles.bar}></span>
            <label className={styles.label}>
              {"Message".split("").map((char, index) => (
                <span
                  key={index}
                  className={styles.labelChar}
                  style={{ "--index": index } as React.CSSProperties}
                >
                  {char}
                </span>
              ))}
            </label>
          </div>

        </form>

        <aside className={styles.information}>

          <PiArrowBendRightDownBold className={styles.arrow}/>

          <div className={styles.dados}>
            <p className="text-neutral-500">It will be sent to this email.</p>
            <p className="text-neutral-50">luizhneri19@gmail.com</p>
          </div>

          <div className={styles.dados}>
            <p className="text-neutral-500">The WhatsApp icon leads to this number.</p>
            <p className="text-neutral-50">+55 11 97307-6649</p>
          </div>

          <div className={styles.dadosSocial}>

            <p className="text-neutral-500">Social media</p>

            <ul className={styles.social}>
              <li className={styles.github} data-name="GitHub">
                <FaGithub />
              </li>

              <li className={styles.linkedin} data-name="LinkedIn">
                <FaLinkedin />
              </li>

              <li className={styles.instagram} data-name="Instagram">
                <FaInstagram />
              </li>
            </ul>

          </div>
      
        </aside>

      </section>

      <div className={styles.button}>
        <hr className="text-neutral-600" />
        <button type="submit" form="contact-form" disabled={status === "loading"} className={styles.submitButton}>
          <FaTelegramPlane className={`${styles.icon} ${status === "loading" ? styles.sending : ""}`}/>
          {status === "loading" ? "Sending..." : "Send It!"}
        </button>

        {status === "success" && (
          <p className={styles.success}>Message sent successfully!</p>
        )}

        {status === "error" && (
          <p className={styles.error}>Something went wrong. Try again.</p>
        )}

      </div>

    </div>
    
  );
}
