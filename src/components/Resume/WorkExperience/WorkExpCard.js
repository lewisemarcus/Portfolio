import * as React from "react"
import WorkHistory from "./WorkHistory"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import "./WorkExpCard.css"
import Container from "@mui/material/Container"

const card = (
    <React.Fragment>
        <div>
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    className={"title"}
                    style={{ marginBottom: "10px" }}
                >
                    Work History
                </Typography>
                <Container>
                    {WorkHistory.map((job, index) => {
                        return (
                            <div key={index}>
                                <Typography
                                    sx={{ fontSize: 16 }}
                                    color="text.secondary"
                                >
                                    {job.name}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {job.title}
                                </Typography>
                                <div style={{ display: "flex" }}>
                                    <Typography
                                        sx={{ mb: 1.5, mr: 0.5, width: "80%" }}
                                        color="text.secondary"
                                    >
                                        {job.date}
                                    </Typography>
                                    <Typography
                                        sx={{ mb: 1.5 }}
                                        color="text.secondary"
                                    >
                                        {job.location}
                                    </Typography>
                                </div>

                                <Typography variant="body2">
                                    <ul>
                                        {job.tasks.map((task, index) => {
                                            return <li key={index}>{task}</li>
                                        })}
                                    </ul>

                                    <br />
                                </Typography>
                            </div>
                        )
                    })}
                </Container>
            </CardContent>
        </div>
    </React.Fragment>
)

export default function WorkExpCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}
