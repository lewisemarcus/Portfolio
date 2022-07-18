import * as React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import ParticleEffect from "../common/Particles"
import Fab from "@mui/material/Fab"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import Zoom from "@mui/material/Zoom"
import Fade from "@mui/material/Fade"
import SendIcon from "@mui/icons-material/Send"
import sendEmail from "../../services/email-service"
import "./Contact.css"
import { useLocation } from "react-router-dom"
import { Heading } from "../common/Heading"
function ScrollTop(props) {
    const { children, window } = props
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    })

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor",
        )
        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
        }
    }

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 20,
                    zIndex: "150 !important",
                }}
            >
                {children}
            </Box>
        </Zoom>
    )
}

const cardStyle = {
    position: "relative",
    zIndex: "0 !important",
    display: "flex",
    justifyContent: "center",
}

export default function Contact(props) {
    const [name, setName] = React.useState("")
    const [nameCheck, nameCheckF] = React.useState(false)

    const [email, setEmail] = React.useState("")
    const [emailCheck, emailCheckF] = React.useState(false)

    const [message, setMessage] = React.useState("")
    const [messageCheck, messageCheckF] = React.useState(false)

    const checkName = (name) => {
        if (name.match(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/)) nameCheckF(false)
        else nameCheckF(true)
        if (name.length === 0) nameCheckF(false)
    }

    const checkEmail = (email) => {
        if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) emailCheckF(false)
        else emailCheckF(true)
        if (email.length === 0) emailCheckF(false)
    }

    const checkMessage = (message) => {
        if (message.length > 1) messageCheckF(false)
        else messageCheckF(true)
    }

    const sendMessage = () => {
        if (name.length === 0 || email.length === 0 || message.length === 0)
            return alert("Please fill in the fields before submitting!")

        if (!nameCheck && !emailCheck && !messageCheck) {
            const content = {
                from_name: name,
                from_email: email,
                message: message,
            }
            sendEmail(content)
            alert("Message sent!")
            return window.location.replace("/")
        } else return alert("Please fill each form out correctly!")
    }

    React.useEffect(() => {
        document.getElementById("message-error-helper").classList.add("message")
    })
    const location = useLocation()
    return (
        <React.Fragment>
            <div id="back-to-top-anchor" style={{ marginBottom: 50 }}></div>
            <Container
                data-aos="fade-up"
                style={{
                    marginTop:
                        location.pathname.split("/")[1] === "Contact" ? 100 : 0,
                }}
            >
                <Heading title="Contact" />
                <Fade unmountOnExit in={true} timeout={500}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Box
                            style={cardStyle}
                            component="form"
                            sx={{
                                mb: 10,
                                opacity: 1,
                                backgroundColor: "#d6d6d6",
                                flexWrap: "wrap",
                                flexDirection: "column",
                                width: 1000,
                                alignItems: "flex-end",
                                p: 1,
                                borderRadius: 5,
                                zIndex: 1,
                                "& .MuiTextField-root": {
                                    m: 1,
                                    flexWrap: "wrap",
                                    flexDirection: "column",
                                },
                                "& .MuiFormControl-root": {
                                    flexDirection: "row",
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                }}
                            >
                                <TextField
                                    error={nameCheck}
                                    id="name-error-helper"
                                    label="Name"
                                    multiline
                                    fullWidth
                                    helperText="Please enter a first and/or last name."
                                    variant="filled"
                                    sx={{ flexWrap: "wrap" }}
                                    onChange={(event) => {
                                        setName(event.target.value)
                                        checkName(event.target.value)
                                    }}
                                />
                                <TextField
                                    error={emailCheck}
                                    fullWidth
                                    id="email-error-helper"
                                    label="Email"
                                    multiline
                                    helperText="Please enter a valid email."
                                    variant="filled"
                                    sx={{ flexWrap: "wrap" }}
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                        checkEmail(event.target.value)
                                    }}
                                />

                                <TextField
                                    error={messageCheck}
                                    fullWidth
                                    multiline
                                    id="message-error-helper"
                                    label="Message"
                                    helperText="Please enter a message."
                                    variant="filled"
                                    onChange={(event) => {
                                        setMessage(event.target.value)
                                        checkMessage(event.target.value)
                                    }}
                                />
                            </div>
                            <Button
                                sx={{
                                    minWidth: "0px !important",
                                    maxWidth: "50px !important",
                                    justifyContent: "center",
                                }}
                                id="send"
                                className={"button"}
                                variant="contained"
                                onClick={() => {
                                    sendMessage()
                                }}
                            >
                                <SendIcon />
                            </Button>
                        </Box>
                    </div>
                </Fade>
            </Container>
            <ScrollTop {...props}>
                <Fab
                    className={"scrollTop"}
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    )
}
