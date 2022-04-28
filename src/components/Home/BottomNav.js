import * as React from "react"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import RestoreIcon from "@mui/icons-material/Restore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LocationOnIcon from "@mui/icons-material/LocationOn"
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
                <BottomNavigationAction
                    label="Recents"
                    icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    icon={<LocationOnIcon />}
                />
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
