import CountUp from "@/components/count/CountUp";
import Image from "next/image";
import BlobCursor from "@/components/cursorBlob/BlobCursor"
import Welcome from "@/components/welcome/welcome";
import Caurosel from "@/components/carousel/carousel"
import WhatsAppButton from "@/components/whatsapp/whatsappButton";
import CurveDivider from "@/components/curveDivider/CurveDivider";
import ContactForm from "@/components/contactForm/ContactForm";

import styles from "./contact.module.css"

export default function Contact() {
    const years = new Date().getFullYear();
    const yearsOuld =  years - 2005;

    return(
        <main className={styles.mainContact}>

            <section className={styles.apresentention}>
                <aside className={styles.conteudo}>
                    
                    <div className={styles.texto}>
                        <h1>Hi, It’s</h1>
                        <h1 className="text-red-700">Luiz</h1>
                    </div>

                    <div className={styles.texto}>                
                        <h2>I’m a </h2>
                        <h2 className="text-red-700">Software Developer</h2>

                    </div>

                    <p className="text-base md:text-xl">I create mobile applications and websites, working as a full-stack developer. I am very hardworking and determined.</p>

                    <div className={styles.texto}>
                        <p>I have</p>
                        <CountUp
                            from={0}
                            to={yearsOuld}
                            separator=","
                            direction="up"
                            duration={10}
                            className="count-up-text text-red-700"
                        />
                        <p>years old</p>
                    </div>

                    <p className="text-gray-400 font-bold">
                        Always in search of knowledge
                        <span className={styles.dots}>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </span>
                    </p>

                </aside>

                <figure  className ={styles.globo} >
                    <Image
                        src="/gifs/earth.gif"
                        alt="Earth"
                        width={460}
                        height={460}
                        unoptimized
                    />

                    <div className={styles.hand}>       
                        <Image
                            src="/gifs/mao.png"
                            alt="Mão"
                            width={350}
                            height={350}
                        />
                    </div>

                </figure>

            </section>

            <section className={styles.fiap}>

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
                    className={styles.logoFiap}
                />
            </section>

            <section className={styles.graduated}>
                <Welcome/>

                <div className={styles.contente}>
                    <p>I am a graduate of</p>
                    <p className="text-red-700">FIAP</p>
                    <p>college, I completed the</p>
                    <p className="text-red-700">Systems Analysis and Development</p>
                    <p>course, finishing in 2025!</p>

                </div>


                <hr className="text-gray-500" />
            </section>

            <section className={styles.graduated}>
                <h1 className="text-2xl md:text-4xl font-bold">Extracurricular courses</h1>

                <Caurosel/>

                <p className="text-gray-400 font-bold">
                    I love learning new things
                    <span className={styles.dots}>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </span>
                </p>
            </section>


            <section className={styles.information}>

                <section
                className=" w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center bg-[url('/background/icons.png')] bg-no-repeat bg-center bg-size-[110%] md:bg-size-[80%] lg:bg-size-[70%]">

                <h1 className="text-xl md:text-3xl lg:text-4xl font-medium text-center text-black px-6">
                    What can I offer you
                    <span className={styles.dots}>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    </span>
                </h1>
                </section>




                <div className={styles.information}>
                    <div className={styles.about}>
                        <h2 className="text-gray-500">01</h2>
                        <hr className="text-gray-500"/>
                        <div className="flex  flex-col gap-7">
                            <h2>Development</h2>
                            <p>I create scalable websites from scratch that seamlessly integrate with the design. Whether fully API-connected or not, I create both relational and non-relational databases and utilize them in a RESTful API.</p>
                        </div>
                    </div>

                    <div className={styles.about}>
                        <h2 className="text-gray-500">02</h2>
                        <hr className="text-gray-500"/>
                        <div className="flex  flex-col gap-7">
                            <h2>Team</h2>
                            <p>I work very well in a team, helping to create new ideas and ways to implement them, always thinking about the scalability of the solutions, both horizontally and vertically.</p>
                        </div>
                    </div>

                    <div className={styles.about}>
                        <h2 className="text-gray-500">03</h2>
                        <hr className="text-gray-500"/>
                        <div className="flex  flex-col gap-7">
                            <h2>Experience</h2>
                            <p>I completed an TI internship at Passos Magicos, working in the data department as an analyst. I gained extensive experience with relational databases, using SQL extensively. For data processing, I used Excel. I was also very important in decision-making due to my work with Power BI and reports. I also had considerable experience with the Activesoft system, in addition to providing technical support for cell phones and computers.</p>
                        </div>
                    </div>
                    
                </div>
                

            </section>

            <CurveDivider />

            <section className={styles.contactSection}>
                <div className={styles.contactWrapper}>
                    <div>
                        <h1>Contact me</h1>
                        <ContactForm />
                    </div>

                    <aside className={styles.info}>
                        <p>It will be sent to this email.</p>
                        <strong>luizhneri19@gmail.com</strong>

                        <p>The WhatsApp icon leads to this number.</p>
                        <strong>+55 11 97307-6649</strong>
                    </aside>
                </div>
            </section>

            <WhatsAppButton />

        </main>

    );
}