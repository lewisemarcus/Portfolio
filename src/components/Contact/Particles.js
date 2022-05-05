import * as React from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const ParticleEffect = () => {
    const particleStyle = {
        position: "fixed",
        zIndex: "3 !important",
    }
    return (
        <Particles
            id="tsparticles"
            init={loadFull}
            style={particleStyle}
            options={{
                background: {
                    color: {
                        value: "#ffffff",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#1565C0",
                    },
                    links: {
                        color: "#1565C0",
                        distance: 150,
                        enable: true,
                        opacity: 0.25,
                        width: 10,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "up",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.5,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 10, max: 10 },
                    },
                },
                detectRetina: false,
            }}
        />
    )
}

export default ParticleEffect
