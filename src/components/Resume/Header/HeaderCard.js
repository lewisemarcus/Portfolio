import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Header from "./Header"

const HeaderCard = () => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <div>
                        <CardContent>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    component="div"
                                    className={"title"}
                                    style={{
                                        marginBottom: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                        fontSize: "45px",
                                        textAlign: "center",
                                    }}
                                >
                                    <div>{Header.name}</div>
                                </Typography>
                            </div>
                            <Typography
                                variant="body2"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontSize: "16px",
                                }}
                            >
                                {Header.location}
                                {Header.phone}
                                {Header.email}
                            </Typography>
                        </CardContent>
                    </div>
                </React.Fragment>
            </Card>
        </Box>
    )
}

export default HeaderCard
