import { social } from "../data/data"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
function Copyright() {
    return (
        <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://marcuslewis.dev/">
                marcuslewis.dev
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

export const Footer = () => {
    return (
        <>
            <footer>
                {social.map((item) => {
                    return (
                        <>
                            <Link
                                href={item.link}
                                color="inherit"
                                target="_blank"
                                rel="noopener"
                            >
                                <i>{item.icon}</i>
                            </Link>
                        </>
                    )
                })}
                <Copyright />
            </footer>
        </>
    )
}
