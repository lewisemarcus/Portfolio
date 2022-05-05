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
                                to="/Resume"
                                style={{ textDecoration: "none" }}
                            >
                                <MenuItem
                                    style={{
                                        color: "rgb(25, 118, 210)",
                                        fontWeight: "bolder",
                                        textDecoration: "none",
                                        padding: 10,
                                        justifyContent: "center",
                                    }}
                                    variant="contained"
                                    id="resume2"
                                    className={"resume"}
                                    onClick={handleClose}
                                >
                                    Resume
                                </MenuItem>
                            </ReactLink>
                        </Menu>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    )
}
