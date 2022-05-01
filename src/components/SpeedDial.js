import * as React from "react"
import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import GitHubIcon from "@mui/icons-material/GitHub"
import "./BottomNav.css"

const actions = [
    {
        icon: <PhoneIcon />,
        name: "Call",
        link: "tel:+9493224186",
    },
    {
        icon: <EmailIcon />,
        name: "Email",
        link: "mailto:lewisemarcus@gmail.com",
    },
    {
        icon: <LinkedInIcon />,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/marcus-e-lewis/",
        target: "_blank",
    },
    {
        icon: <GitHubIcon />,
        name: "Github",
        link: "https://github.com/lewisemarcus",
        target: "_blank",
    },
]

export default function BasicSpeedDial() {
    return (
        <Box
            sx={{ flexGrow: 1 }}
            onClick={(e) => {
                console.log(e.target)
            }}
        >
            <SpeedDial
                direction="down"
                ariaLabel="SpeedDial"
                sx={{ position: "fixed", top: 16, right: 10 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        onClick={() => window.open(action.link)}
                        className={"MyButton"}
                        key={action.name}
                        target={action.target}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    )
}
