import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Zoom from "@mui/material/Zoom"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { Link as ReactLink } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import MenuIcon from "@mui/icons-material/Menu"
import "./AppBar.css"

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children, window } = props
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    })

    return React.cloneElement(children, {
        elevation: trigger ? 3 : 0,
    })
}

export default function ElevateAppBar(props: Props) {
    React.useEffect(() => {
        document.getElementById("menu2").style.backgroundColor =
            "rgb(25, 118, 210)"
        document.getElementById("menu2").style.color = "white"
        document.getElementById("home2").style.position = "absolute"
        document.getElementById("home2").style.opacity = "0"
        document.getElementById("home2").style.top = "-100px"
        document.getElementById("resume").style.position = "absolute"
        document.getElementById("resume").style.opacity = "0"
        document.getElementById("resume").style.top = "-100px"
    })

    return (
        <React.Fragment>
            {}
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar sx={{ backgroundColor: "white !important" }}>
                    <Toolbar sx={{ justifyContent: "flex-start" }}>
                        <Typography variant="h6" component="div">
                            <Zoom in={true} timeout={500}>
                                <Stack
                                    sx={{ pb: 0.5, pt: 0.5 }}
                                    direction="row"
                                    spacing={1}
                                    justifyContent="center"
                                >
                                    <Button
                                        id="menu2"
                                        variant="contained"
                                        className={"button2"}
                                        onClick={() => {
                                            const button =
                                                document.getElementById("menu2")
                                            console.log(
                                                button.style.backgroundColor,
                                            )
                                            button.style.backgroundColor =
                                                button.style.backgroundColor ===
                                                "rgb(25, 118, 210)"
                                                    ? "white"
                                                    : "rgb(25, 118, 210)"
                                            button.style.color =
                                                button.style.color ===
                                                "rgb(25, 118, 210)"
                                                    ? "white"
                                                    : "rgb(25, 118, 210)"
                                            const home =
                                                document.getElementById("home2")
                                            const resume =
                                                document.getElementById(
                                                    "resume",
                                                )

                                            for (let each of [home, resume]) {
                                                each.style.opacity =
                                                    each.style.opacity === "0"
                                                        ? "1"
                                                        : "0"
                                                setTimeout(function () {
                                                    console.log(
                                                        each,
                                                        each.style.position,
                                                    )

                                                    each.style.position =
                                                        each.style.position ===
                                                        "absolute"
                                                            ? "relative"
                                                            : "absolute"

                                                    each.style.top =
                                                        each.style.top ===
                                                        "-100px"
                                                            ? "0"
                                                            : "-100px"
                                                }, 250)
                                            }
                                        }}
                                    >
                                        <MenuIcon />
                                    </Button>
                                    <ReactLink color="inherit" to="/">
                                        <Button
                                            onClick={() => {
                                                document.getElementById(
                                                    "menu2",
                                                ).style.backgroundColor =
                                                    "rgb(25, 118, 210)"
                                                document.getElementById(
                                                    "menu2",
                                                ).style.color = "white"
                                            }}
                                            variant="contained"
                                            id="home2"
                                            className={"home2"}
                                        >
                                            <HomeIcon />
                                        </Button>
                                    </ReactLink>

                                    <ReactLink
                                        color="inherit"
                                        to="/Resume"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            onClick={() => {
                                                document.getElementById(
                                                    "menu2",
                                                ).style.backgroundColor =
                                                    "rgb(25, 118, 210)"
                                                document.getElementById(
                                                    "menu2",
                                                ).style.color = "white"
                                            }}
                                            variant="contained"
                                            id="resume"
                                            className={"resume"}
                                        >
                                            Resume
                                        </Button>
                                    </ReactLink>
                                </Stack>
                            </Zoom>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    )
}
