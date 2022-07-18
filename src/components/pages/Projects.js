import { Visibility } from "@mui/icons-material"
import ParticleEffect from "../common/Particles"
import { projects } from "../data/data"
import { Heading } from "../common/Heading"
import { useLocation } from "react-router-dom"
export const Projects = () => {
    const location = useLocation()
    return (
        <>
            <article
                data-aos="fade-up"
                style={{
                    marginTop:
                        location.pathname.split("/")[1] === "Projects"
                            ? 100
                            : 0,
                }}
            >
                <div className="container articleContainer">
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
                                            target="_blank"
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
                                            target="_blank"
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
            {location.pathname.split("/")[1] === "" && (
                <div
                    className="arrow"
                    style={{ marginTop: "-50px", marginBottom: "200px" }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
        </>
    )
}
