"use client";

import { useState } from "react";
import styles from "./contactForm.module.css";

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
    <form className={styles.form} onSubmit={handleSubmit} noValidate>

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
        <textarea name="message" required minLength={2} className={styles.input} />
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

      <button
        type="submit"
        disabled={status === "loading"}
        className={styles.submitButton}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className={styles.success}>Message sent successfully!</p>
      )}

      {status === "error" && (
        <p className={styles.error}>Something went wrong. Try again.</p>
      )}
    </form>
  );
}
