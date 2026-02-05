import Welcome from "@/components/welcome/welcome";
import Particles  from "@/components/particles/Particles";
import Image from "next/image";

import LogoLoop from "@/components/logoLoop/LogoLoop";
import {SiReact,SiNextdotjs,SiTypescript,SiTailwindcss,SiGithub,SiHtml5,SiCss3,SiJavascript,SiDotnet,SiPython,
} from 'react-icons/si';


import styles from "./page.module.css";

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Home() {
  await delay(1800); 

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },

  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiDotnet />, title: ".NET", href: "https://dotnet.microsoft.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },


];



  return (
    <main>
      <Welcome />

      <section className={styles.localization}>

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

      <section className={styles.developer}>
        <h1>Always studying so that I can become better every day!</h1>
        <p>Taught to be a back-end and front-end programmer, to become a true full-stack developer.</p>
      </section>


      <div className={styles.logoLoopWrapper}>
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
        />
      </div>


    </main>
  );
}
