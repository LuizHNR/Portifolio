import CountUp from "@/components/count/CountUp";
import Image from "next/image";
import BlobCursor from "@/components/cursorBlob/BlobCursor"
import Welcome from "@/components/welcome/welcome";

import styles from "./contact.module.css"

export default function Contact() {
    const years = new Date().getFullYear();
    const yearsOuld =  years - 2005;

    return(
        <main>

            <section className={styles.apresentention}>
                <aside className={styles.conteudo}>
                    
                    <div className={styles.texto}>
                        <h1>Hi, It’s</h1>
                        <h1>Luiz</h1>
                    </div>

                    <div className={styles.texto}>                
                        <h2>I’m a </h2>
                        <h2>Software Developer</h2>

                    </div>

                    <p>I create mobile applications and websites, working as a full-stack developer. I am very hardworking and determined.</p>

                    <div className={styles.texto}>
                        <p>I have</p>
                        <CountUp
                            from={0}
                            to={yearsOuld}
                            separator=","
                            direction="up"
                            duration={10}
                            className="count-up-text"
                        />
                        <p>years old</p>
                    </div>

                    <p>Always in search of knowledge...</p>

                </aside>

                <aside>
                    <Image
                        src="/gifs/earth.gif"
                        alt="Earth"
                        width={460}
                        height={460}
                    />

                    <div>       
                        <Image
                            src="/gifs/mao.png"
                            alt="Mão"
                            width={350}
                            height={350}
                        />
                    </div>

                </aside>

            </section>

            <section
                style={{
                    position: "relative",
                    width: "100vw",
                    height: "160svh",
                    overflow: "hidden",
                    background: "#000",
                }}
                >
                {/* Blob up */}
                <BlobCursor
                    blobType="circle"
                    fillColor="#ED145B"
                    trailCount={3}
                    sizes={[40, 90, 80]}    
                    innerSizes={[15, 25, 20]}
                    innerColor="rgba(255,255,255,0.8)"
                    opacities={[0.6, 0.6, 0.6]}
                    shadowColor="rgba(0,0,0,0.75)"
                    shadowBlur={5}
                    shadowOffsetX={10}
                    shadowOffsetY={10}
                    filterStdDeviation={25}
                    useFilter={true}
                    fastDuration={0.1}
                    slowDuration={0.5}
                    zIndex={10}
                />

                {/* Image */}
                <Image
                    src="/fiapLogo/fiap.png"
                    alt="logo-fiap"
                    fill
                    priority
                    sizes="100vw"
                    style={{
                    objectFit: "cover",
                    zIndex: 1,
                    }}
                />
            </section>

            <div>
                <Welcome/>

                <p>I am a graduate of</p>
                <p>FIAP</p>
                <p>college, I completed the</p>
                <p>Systems Analysis and Development</p>
                <p>course, finishing in 2025!</p>
                <hr />
            </div>

            <section>
                <h1>Extracurricular courses</h1>

                <p>I love learning new things...</p>
            </section>


        </main>

    );
}