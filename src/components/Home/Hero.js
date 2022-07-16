import { home } from "../data/data"
import Typewriter from "typewriter-effect"
import ParticleEffect from "../common/Particles"
import { width } from "@mui/system"
const skillList = [
    "Javascript",
    "Node.js",
    "Python",
    "Flask",
    "React",
    "Handlebars",
    "GraphQL",
    "MongoDB",
    "AWS",
    "MySQL",
]
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
                    <div
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            color: "#1f87ff",
                            flexWrap: "wrap",
                        }}
                    >
                        {skillList.map((skill) => {
                            return (
                                <button className="skillBtn">
                                    <h4>{skill}</h4>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </section>
            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}
