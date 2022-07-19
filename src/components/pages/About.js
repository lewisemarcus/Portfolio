import { about } from "../data/data"
import { Heading } from "../common/Heading"
import ProfilePic from "../data/images/ProfilePic.jpg"
import ParticleEffect from "../common/Particles"
import { useLocation } from "react-router-dom"
export const About = () => {
    const location = useLocation()
    return (
        <div
            className={
                location.pathname.split("/")[1] === "About"
                    ? "aboutSolo"
                    : "sections"
            }
            data-aos="fade-up"
        >
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
                    <div className="right" data-aos="fade-down">
                        <Heading title="About Me" />
                        <p>{about.desc}</p>
                        <p>{about.desc1}</p>
                        <button
                            className="primaryBtn"
                            onClick={() => {
                                window.open(
                                    "https://docs.google.com/document/d/19dFzMjJDZzrgA9dttHqgqtIO_ayKti0nWINVoGuTD40/edit?usp=sharing",
                                    "_blank",
                                )
                            }}
                        >
                            View Resume
                        </button>
                    </div>
                </div>
            </section>
            {location.pathname.split("/")[1] === "" && (
                <div
                    className="arrow"
                    style={{
                        marginTop:
                            window.innerWidth > "530px" ? "-50px" : "100px",
                        marginBottom:
                            window.innerWidth > "530px" ? "200px" : "150px",
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
        </div>
    )
}
