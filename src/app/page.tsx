import Welcome from "@/components/welcome/welcome";
import Particles  from "@/components/particles/Particles";
import Image from "next/image";
import CardSwap, { Card } from "@/components/card/CardSwap";
import CurveDivider from "@/components/curveDivider/CurveDivider";
import LogoLoop from "@/components/logoLoop/LogoLoop";
import {SiReact,SiNextdotjs,SiTypescript,SiTailwindcss,SiGithub,SiHtml5,SiCss3,SiJavascript,SiDotnet,SiPython,
} from 'react-icons/si';


import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {


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
              unoptimized
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

      <section className={styles.projetos}>

        <h1 className={styles.some}>Some projects!</h1>

        <div
          className={styles.projetoLevi}>
          <div className={styles.detalheProjeto}>
            <h2>01</h2>
            <h1>Levi</h1>

            <div className="flex flex-col gap-4">
              <h2 className="pl-3.5">
                Creator of the Design • in a team in programming
              </h2>
              <p>
                LEVI is a clean energy project that encourages individuals and companies
                to invest in solar energy, promoting sustainability and long-term investment.
              </p>
            </div>

            <h3>Web Site</h3>
          </div>

          <aside style={{ height: '400px', position: 'relative' }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <Image
                  src="/projetos/Levi/image1.png"
                  alt="imagem projeto levi"
                  width={600}
                  height={600}
                />
              </Card>
              <Card>
                <Image
                  src="/projetos/Levi/image2.png"
                  alt="imagem projeto levi"
                  width={600}
                  height={600}
                />
              </Card>
              <Card>
                <Image
                  src="/projetos/Levi/image3.png"
                  alt="imagem projeto levi"
                  width={600}
                  height={600}
                />
              </Card>
            </CardSwap>
          </aside>


        </div>



        <div
          className={styles.projetoLevi}>
          <div className={styles.detalheProjeto}>
            <h2>02</h2>
            <h1>NebuloHub</h1>

            <div className="flex flex-col gap-4">
              <h2 className="pl-3.5">
                Creator of the Design • in a team in programming
              </h2>
              <p>
                NebuloHub is an intelligent platform that connects, evaluates, and gives
                visibility to startups using AI and public reviews.
              </p>
            </div>

            <h3>Mobile App</h3>
          </div>

          <aside style={{ height: '400px', position: 'relative'}}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <Image
                  src="/projetos/nebulo/image1.png"
                  alt="imagem projeto levi"
                  width={110}
                  height={110}
                />
              </Card>
              <Card>
                <Image
                  src="/projetos/nebulo/image2.png"
                  alt="imagem projeto levi"
                  width={110}
                  height={110}
                />
              </Card>
              <Card>
                <Image
                  src="/projetos/nebulo/image3.png"
                  alt="imagem projeto levi"
                  width={110}
                  height={110}
                />
              </Card>
            </CardSwap>
          </aside>

        </div>


          <Link href="/work" className={styles.more}>More work</Link>

      </section>

      <CurveDivider />
    </main>
  );
}
