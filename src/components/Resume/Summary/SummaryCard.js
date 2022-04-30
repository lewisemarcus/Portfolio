import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Summary from "./Summary"
import "./SummaryCard.css"

const card = (
    <React.Fragment>
        <div>
            <CardContent>
                <Typography variant="h5" component="div" className={"title"}>
                    {Summary.title}
                </Typography>
                <Typography variant="body2">
                    <p className={"content"}>{Summary.content}</p>
                    <br />
                </Typography>
            </CardContent>
        </div>
    </React.Fragment>
)

export default function SummaryCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}
