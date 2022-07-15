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
                        <button>View Resume</button>
                        <button className="primaryBtn">View Resume</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
