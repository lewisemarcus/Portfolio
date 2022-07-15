import { Visibility } from "@mui/icons-material"
import ParticleEffect from "../common/Particles"
import { projects } from "../data/data"
import { Heading } from "../common/Heading"
export const Projects = () => {
    return (
        <>
            <article>
                <div className="container articleContainer">
                    <ParticleEffect />
                    <Heading title="Projects" />
                    <div className="content grid3">
                        {projects.map((items) => {
                            return (
                                <div className="box" data-aos="fade-up">
                                    <div className="img">
                                        <img
                                            src={items.cover}
                                            alt="project cover"
                                        />
                                    </div>
                                    <div className="overlay">
                                        <h3 style={{ cursor: "default" }}>
                                            {items.title}
                                        </h3>
                                        <a
                                            href={items.contributions}
                                            style={{
                                                marginTop: 10,
                                                marginBottom: 10,
                                                textDecoration: "none",
                                                color: "#f8ba10",
                                            }}
                                        >
                                            Contributions
                                        </a>
                                        <a
                                            href={items.deployed}
                                            style={{
                                                marginBottom: 10,
                                                textDecoration: "none",
                                                color: "#f8ba10",
                                            }}
                                        >
                                            Deployed Application
                                        </a>
                                        <span style={{ cursor: "default" }}>
                                            Tech: {items.tech}
                                        </span>
                                        <Visibility />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </article>
        </>
    )
}
