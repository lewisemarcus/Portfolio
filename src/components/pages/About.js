import { about } from "../data/data"
import { Heading } from "../common/Heading"
import ProfilePic from "../data/images/ProfilePic.jpg"
import ParticleEffect from "../common/Particles"
export const About = () => {
    return (
        <div className="sections">
            <ParticleEffect />
            <section className="about">
                <div className="container flex">
                    <div className="left">
                        <img
                            src={ProfilePic}
                            style={{
                                width: 300,
                                height: 300,
                                borderRadius: "50%",
                            }}
                            data-aos="fade-down-right"
                            alt="profile picture"
                        />
                    </div>
                    <div className="right" data-aos="fade-down-left">
                        <Heading title="About Me" />
                        <p>{about.desc}</p>
                        <p>{about.desc1}</p>
                        <button
                            className="primaryBtn"
                            onClick={() => {
                                window.open(
                                    "https://docs.google.com/document/d/1G4aW97dNlXFZpiCyOIOB0LQqFmEtDnRP/edit?usp=sharing&ouid=104023069321723191196&rtpof=true&sd=true",
                                    "_blank",
                                )
                            }}
                        >
                            View Resume
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
