import { home } from "../data/data"
import Typewriter from "typewriter-effect"
import ParticleEffect from "../common/Particles"

export const Hero = () => {
    return (
        <>
            <section className="hero sections">
                <ParticleEffect />
                <div className="heroContainer">
                    <h3 data-aos="fade-right">{home.text}</h3>
                    <h1>
                        <Typewriter
                            options={{
                                strings: [`${home.name}`, `${home.post}`],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p data-aos="fade-left">{home.desc}</p>
                    <button className="primaryBtn" data-aos="fade-up-right">
                        View Resume
                    </button>
                </div>
            </section>
        </>
    )
}
