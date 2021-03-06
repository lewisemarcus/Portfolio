import * as React from "react"

import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const ParticleEffect = () => {
    const particlesInit = async (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main)
    }

    const particlesLoaded = (container) => {}
    const particleStyle = {
        position: "absolute",
        zIndex: "-1 !important",
        width: "100vw !important",
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={particleStyle}
            options={{
                background: {
                    color: {
                        value: "#212222",
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
                    polygon: {
                        nb_sides: 5,
                    },
                    line_linked: {
                        enable: true,
                        distance: 100,
                        color: "#1565C0",
                        opacity: 0.4,
                        width: 1,
                        triangles: {
                            enable: true,
                            color: "#1565C0",
                            opacity: 0.1,
                        },
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.5,
                        straight: false,
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
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default ParticleEffect
