import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { Link as ReactLink } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
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
        style: trigger
            ? { backgroundColor: "white" }
            : { backgroundColor: "transparent" },
    })
}

export default function ElevateAppBar(props: Props) {
    React.useEffect(() => {
        document.getElementById("menu").style.backgroundColor =
            "rgb(25, 118, 210)"
        document.getElementById("menu").style.color = "white"
        document.getElementById("home").style.position = "absolute"
        document.getElementById("home").style.opacity = "0"
        document.getElementById("home").style.top = "-100px"
        document.getElementById("pdf").style.position = "absolute"
        document.getElementById("pdf").style.opacity = "0"
        document.getElementById("pdf").style.top = "-100px"
        document.getElementById("projects").style.position = "absolute"
        document.getElementById("projects").style.opacity = "0"
        document.getElementById("projects").style.top = "-100px"
    })
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar sx={{ backgroundColor: "transparent", p: 0.5 }}>
                    <Toolbar sx={{ justifyContent: "flex-start" }}>
                        <Typography variant="h6" component="div">
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                    flexWrap: "wrap",
                                }}
                            >
                                <Button
                                    id="menu"
                                    className={"button"}
                                    variant="contained"
                                    onClick={() => {
                                        const button =
                                            document.getElementById("menu")
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
                                        const projects =
                                            document.getElementById("projects")
                                        const home =
                                            document.getElementById("home")
                                        const pdf =
                                            document.getElementById("pdf")

                                        for (let each of [
                                            home,
                                            pdf,
                                            projects,
                                        ]) {
                                            each.style.opacity =
                                                each.style.opacity === "0"
                                                    ? "1"
                                                    : "0"
                                            setTimeout(function () {
                                                each.style.position =
                                                    each.style.position ===
                                                    "absolute"
                                                        ? "relative"
                                                        : "absolute"
                                                each.style.top =
                                                    each.style.top === "-100px"
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
                                        variant="contained"
                                        id="home"
                                        className={"home"}
                                    >
                                        <HomeIcon />
                                    </Button>
                                </ReactLink>

                                <ReactLink
                                    color="inherit"
                                    to="/Projects"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        id="projects"
                                        variant="contained"
                                        className={"projects"}
                                    >
                                        Projects
                                    </Button>
                                </ReactLink>

                                <Button
                                    variant="contained"
                                    id="pdf"
                                    className={"pdf"}
                                    onClick={(e) => {
                                        window.open(
                                            "https://drive.google.com/file/d/1Sh-d-dsmh9nYObVO6nvmw6-waHzEeoRL/view?usp=sharing",
                                            "_blank",
                                        )
                                    }}
                                >
                                    <PictureAsPdfIcon />
                                </Button>
                            </Stack>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    )
}
