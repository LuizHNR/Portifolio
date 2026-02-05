import Welcome from "@/components/welcome/welcome";
import Particles  from "@/components/particles/Particles";
import Image from "next/image";

import styles from "./page.module.css";

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Home() {
  await delay(1800); 

  return (
    <main>
      <Welcome />

      <section className={styles.localization}>

        {/* FUNDO */}
        <div className={styles.particlesBg}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <span className={styles.badge}>Location</span>
            <h1>Located in the Brazil</h1>
            <p>
              Born in the state of São Paulo, currently living in the city of
              Embu-Guaçu.
            </p>
          </div>

          <div className={styles.planet}>
            <Image
              src="/gifs/earth.gif"
              alt="Earth"
              width={600}
              height={600}
            />
          </div>
        </div>

      </section>



    </main>
  );
}
