"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contactForm.module.css";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function validateForm(form: HTMLFormElement) {
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

    if (!name || name.length < 2) return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;

    if (!message || message.length < 10) return false;

    return true;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;

    // Honeypot anti-bot
    const botField = (form.elements.namedItem("company") as HTMLInputElement)?.value;
    if (botField) return;

    if (!validateForm(form)) {
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      form.reset();

    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>

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
            <span key={index} className={styles.labelChar} style={{ "--index": index } as React.CSSProperties}>
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
            <span key={index} className={styles.labelChar} style={{ "--index": index } as React.CSSProperties}>
              {char}
            </span>
          ))}
        </label>
      </div>

      {/* MESSAGE */}
      <div className={styles.waveGroup}>
        <textarea name="message" required minLength={10} className={styles.input} />
        <span className={styles.bar}></span>
        <label className={styles.label}>
          {"Message".split("").map((char, index) => (
            <span key={index} className={styles.labelChar} style={{ "--index": index } as React.CSSProperties}>
              {char}
            </span>
          ))}
        </label>
      </div>

      <button type="submit" disabled={loading} className={styles.submitButton}>
        {loading ? "Sending..." : "Send it!"}
      </button>

      {success && (
        <p className={styles.success}>Message sent successfully!</p>
      )}
      {error && (
        <p className={styles.error}>Please fill correctly or try again.</p>
      )}
    </form>
  );
}
