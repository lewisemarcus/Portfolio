import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"
import Zoom from "@mui/material/Zoom"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { Link as ReactLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import HomeIcon from "@mui/icons-material/Home"
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import "./AppBar.css"
import { ProjectList, BugZapper } from "./ProjectList"

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

window.onload = () => {
    document.getElementById("menu2").style.backgroundColor = "rgb(25, 118, 210)"
    document.getElementById("menu2").style.color = "white"
}
export default function ElevateAppBar(props: Props) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        const button = event.currentTarget
        button.style.backgroundColor = "white"
        button.style.color = "rgb(25, 118, 210)"

        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        const button = document.getElementById("menu2")
        button.style.backgroundColor = "rgb(25, 118, 210)"
        button.style.color = "white"

        setAnchorEl(null)
    }

    const scrollBugZapper = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
        const yOffset = -30
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
    }
    const scrollProjects = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
        const yOffset = 170
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
    }

    return (
        <React.Fragment>
            <CssBaseline />

            <AppBar
                elevation={0}
                id="appbar1"
                sx={{ backgroundColor: "transparent", p: 0, height: 55 }}
            >
                <Toolbar
                    sx={{
                        justifyContent: "flex-start",
                    }}
                >
                    <Typography variant="h6" component="div">
                        <Zoom in={true} timeout={500} unmountOnExit>
                            <Stack sx={{ pb: 1 }} direction="row" spacing={1}>
                                <Button
                                    aria-controls={
                                        open ? "fade-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    sx={{
                                        minWidth: "0px !important",
                                        maxWidth: "50px !important",
                                    }}
                                    id="menu2"
                                    variant="contained"
                                    className={"button2"}
                                    onClick={(event) => {
                                        handleClick(event)
                                    }}
                                >
                                    <MenuIcon />
                                </Button>
                            </Stack>
                        </Zoom>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                "aria-labelledby": "menu2",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Zoom}
                        >
                            <ReactLink
                                color="inherit"
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "rgb(25, 118, 210)",
                                }}
                            >
                                <MenuItem
                                    onClick={handleClose}
                                    id="home2"
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <HomeIcon
                                        className={"home2"}
                                        sx={{
                                            color: "rgb(25, 118, 210)",
                                        }}
                                    />
                                </MenuItem>
                            </ReactLink>
                            <ReactLink
                                color="inherit"
                                to="/Resume"
                                style={{
                                    textDecoration: "none",
                                    color: "rgb(25, 118, 210)",
                                }}
                            >
                                <MenuItem
                                    onClick={handleClose}
                                    className={"home2"}
                                    sx={{
                                        color: "rgb(25, 118, 210)",
                                        fontWeight: "bolder",
                                        textDecoration: "none",
                                        padding: 1,
                                        justifyContent: "center",
                                    }}
                                >
                                    Resume
                                </MenuItem>
                            </ReactLink>
                            <ReactLink
                                color="inherit"
                                to="/Contact"
                                style={{ textDecoration: "none" }}
                            >
                                <MenuItem
                                    id="contact"
                                    variant="contained"
                                    className={"projects"}
                                    style={{
                                        color: "rgb(25, 118, 210)",
                                        fontWeight: "bolder",
                                        textDecoration: "none",
                                        padding: 10,
                                        justifyContent: "center",
                                    }}
                                >
                                    Contact
                                </MenuItem>
                            </ReactLink>
                            <HashLink
                                scroll={(el) => scrollBugZapper(el)}
                                smooth
                                to={BugZapper.href}
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                <MenuItem
                                    onClick={handleClose}
                                    style={{
                                        color: "rgb(25, 118, 210)",
                                        fontWeight: "bolder",
                                        textDecoration: "none",
                                        padding: 10,
                                        justifyContent: "center",
                                    }}
                                >
                                    {BugZapper.short}
                                </MenuItem>
                            </HashLink>
                            {ProjectList.map((project, index) => {
                                return (
                                    <HashLink
                                        scroll={(el) => scrollProjects(el)}
                                        key={index}
                                        smooth
                                        to={project.href}
                                        style={{
                                            textDecoration: "none",
                                        }}
                                    >
                                        <MenuItem
                                            onClick={handleClose}
                                            style={{
                                                color: "rgb(25, 118, 210)",
                                                fontWeight: "bolder",
                                                textDecoration: "none",
                                                padding: 10,
                                                justifyContent: "center",
                                            }}
                                        >
                                            {project.short}
                                        </MenuItem>
                                    </HashLink>
                                )
                            })}
                        </Menu>
                    </Typography>
                </Toolbar>
            </AppBar>

            <Toolbar />
        </React.Fragment>
    )
}
