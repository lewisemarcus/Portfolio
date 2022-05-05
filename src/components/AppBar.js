import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"

import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Zoom from "@mui/material/Zoom"
import { Link as ReactLink } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
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

window.onload = () => {
    if (document.getElementById("message-error-helper"))
        document.getElementById("message-error-helper").style.height = "10em"
    if (document.getElementById("menu")) {
        document.getElementById("menu").style.backgroundColor =
            "rgb(25, 118, 210)"
        document.getElementById("menu").style.color = "white"
    }

    if (document.getElementById("menu2")) {
        document.getElementById("menu2").style.backgroundColor =
            "rgb(25, 118, 210)"
        document.getElementById("menu2").style.color = "white"
    }
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
        const button = document.getElementById("menu")
        button.style.backgroundColor = "rgb(25, 118, 210)"
        button.style.color = "white"

        setAnchorEl(null)
    }

    return (
        <React.Fragment>
            <CssBaseline />

            <AppBar
                elevation={0}
                sx={{ backgroundColor: "transparent", p: 0, height: 55 }}
            >
                <Toolbar sx={{ justifyContent: "flex-start" }}>
                    <Typography variant="h6" component="div">
                        <Zoom in={true} timeout={500} unmountOnExit>
                            <Stack direction="row" spacing={1} sx={{ pb: 1 }}>
                                <Button
                                    sx={{
                                        minWidth: "0px !important",
                                        maxWidth: "50px !important",
                                    }}
                                    id="menu"
                                    className={"button"}
                                    variant="contained"
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
                                "aria-labelledby": "menu",
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
                                    id="home"
                                    style={{
                                        padding: 10,
                                        justifyContent: "center",
                                    }}
                                >
                                    <HomeIcon
                                        className={"home"}
                                        sx={{
                                            color: "rgb(25, 118, 210)",
                                        }}
                                    />
                                </MenuItem>
                            </ReactLink>
                            <ReactLink
                                color="inherit"
                                to="/Projects"
                                style={{ textDecoration: "none" }}
                            >
                                <MenuItem
                                    id="projects"
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
                                    Projects
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

                            <MenuItem
                                style={{
                                    padding: 10,
                                    justifyContent: "center",
                                    color: "rgb(25, 118, 210)",
                                }}
                                variant="contained"
                                id="pdf"
                                className={"pdf"}
                                onClick={(e) => {
                                    window.open(
                                        "https://drive.google.com/file/d/1EceWvGlGMabyicNEMFwkYFqqRi4Ug-sf/view?usp=sharing",
                                        "_blank",
                                    )
                                }}
                            >
                                <PictureAsPdfIcon />
                            </MenuItem>
                        </Menu>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    )
}
