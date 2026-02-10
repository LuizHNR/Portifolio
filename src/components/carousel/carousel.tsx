import Image from "next/image";
import styles from "./carousel.module.css";

const diplomas = [
  "/diplomas/diploma1.png",
  "/diplomas/diploma2.png",
  "/diplomas/diploma3.png",
  "/diplomas/diploma4.png",
  "/diplomas/diploma5.png",
  "/diplomas/diploma6.png",
  "/diplomas/diploma7.png",
];

export default function Carousel() {
  return (
    <main className={styles.carousel}>
      <div className={styles.group}>
        {diplomas.map((src, index) => (
          <figure key={index} className={styles.card}>
            <Image
              src={src}
              alt={`Diploma ${index + 1}`}
              fill
              sizes="(max-width: 768px) 150px, 200px"
            />
          </figure>
        ))}
      </div>

      {/* clone para loop infinito */}
      <div aria-hidden className={styles.group}>
        {diplomas.map((src, index) => (
          <figure key={`clone-${index}`} className={styles.card}>
            <Image
              src={src}
              alt=""
              fill
            />
          </figure>
        ))}
      </div>
    </main>
  );
}
