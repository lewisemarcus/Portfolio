import * as React from "react"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import Link from "@mui/material/Link"

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://marcuslewis.dev/">
                marcuslewis.dev
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

const BottomNav = () => {
    const [value, setValue] = React.useState(0)

    return (
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            >
                <BottomNavigationAction label="Phone" icon={<PhoneIcon />} />

                <BottomNavigationAction label="Email" icon={<EmailIcon />} />
                <BottomNavigationAction
                    label="LinkedIn"
                    icon={<LinkedInIcon />}
                />
                <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
                {/* Footer */}
                <Box
                    sx={{ bgcolor: "background.paper", p: 3 }}
                    component="footer"
                >
                    <Copyright />
                </Box>
                {/* End footer */}
            </BottomNavigation>
        </Paper>
    )
}

export default BottomNav
