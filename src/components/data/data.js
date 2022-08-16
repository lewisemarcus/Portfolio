import { Phone, GitHub, LinkedIn } from "@mui/icons-material"

export const navlink = [
    {
        link: "",
        url: "/",
        text: "Home",
    },
    {
        link: "About",
        url: "/About",
        text: "About",
    },
    {
        link: "Projects",
        url: "/Projects",
        text: "Projects",
    },
    {
        link: "Contact",
        url: "/Contact",
        text: "Contact",
    },
]
export const home = {
    text: "HELLO I'M",
    name: "MARCUS LEWIS",
    post: "A FULL-STACK DEVELOPER",
    desc: `I am a Full Stack Web Developer with a background in Content Analysis, denoted by my certificate in Full-Stack Development from UCI's Full-Stack Program. Below are some of the technologies I've used while developing sites/apps.`,
}
export const logo = "/static/images/bestlogo.png"
export const about = {
    desc: "I am gifted in evaluating risk and loss potential and developing information for new and renewal policies. I am team-oriented with success in creating case studies and content validation. I try to be at the forefront of all projects I work on to make sure I get the experience and understand the entirety of the project, exemplified by my roles in projects and tasks I've undertaken.",
    desc1: `For each project, my goal was to immerse myself with the most "difficult" aspects of them, such as back-end development and integration. I am highly motivated and eager to grow my career as a Developer. I have a desire for industry knowledge and trends to implement further in my career.`,
}

export const projects = [
    {
        title: "Chat Snap: Instant Messenger",
        name: "ChatSnap",
        body: "A performant Android application that allows users to send and receive messages to added contacts in real-time. Users are connected to cloud storage databases for profile editing as well as manage contacts and messages. Implemented push notification functionality for friend requests and messages received.",
        github: "https://www.github.com/lewisemarcus/chatSnap",
        deployed: "https://play.google.com/store/apps/details?id=com.chatSnap",
        cover: "/static/images/phonebg.png",
        contributions:
            "https://github.com/lewisemarcus/chatSnap/commits?author=lewisemarcus",
        tech: "JavaScript, Python, Flask, MongoDB Atlas, React Native, Expo, Firebase, Web Socket, JWT, Google Play",
    },
    {
        title: "Soundify: Listen/Jive/Relax",
        name: "Soundify",
        body: "Soundify is a online music player where users are required to create an account or login to our site to listen, upload, and comment on songs. Users can search for songs and create and update playlists.",
        github: "https://github.com/lewisemarcus/Soundify",
        deployed: "https://www.soundify.live/",
        cover: "/static/images/soundify2.png",
        contributions:
            "https://github.com/lewisemarcus/Soundify/commits?author=lewisemarcus",
        tech: "JavaScript, MongoDB Atlas, Amazon S3, GraphQL, React, Node.js, Express.js, AntDesign, JWT, Certbot",
        role: "Database design and implementation, GraphQL integration, front-end integration, audio spectrum/waveform creation, audio player integration, SSL certification",
        href: "#soundify",
        id: "soundify",
    },
    {
        title: "Bug Zapper: Bug Tracking Application",
        name: "Bug Zapper",
        body: "This website allows a user to create an account and manage bugs relating to specific projects. A user can also add contributors to the project for assistance with management and updating the bugs. Each bug has a viewable history denoted by a blue hyperlink text of the bug's title. ",
        github: "https://github.com/lewisemarcus/bugTracker",
        deployed: "bug-zapper-app.herokuapp.com/",
        cover: "/static/images/bugzapper2.png",
        contributions:
            "https://github.com/lewisemarcus/bugTracker/commits?author=lewisemarcus&before=94a5aceb4ad84b78d80588bd8ba28c319bd6ecdc+35",
        tech: "JavaScript, Express.js, Handlebars.js, MySQL, Node.js, CSS",
        role: "RESTful API design, Database design, Front-end integration with API",
        href: "#bugZapper",
        id: "bugZapper",
    },
    {
        title: "Bluer Skies: Air Quality Index Map",
        name: "Bluer Skies",
        body: "This website displays a scrollable/interactive map with a grid of colored points representing fine particle pollution levels. It uses (quasi) unlimited free APIs.",
        github: "https://github.com/lewisemarcus/PollutionMap",
        deployed: "https://lewisemarcus.github.io/PollutionMap/",
        cover: "/static/images/pollutionnew.png",
        contributions:
            "https://github.com/lewisemarcus/PollutionMap/commits?author=lewisemarcus",
        tech: "JavaScript, Bulma, OpenLayers Maps, WAQI API, IP API",
        role: "Map Editor, Air Quality API calls, Front-end integration, Some front-end design",
        href: "#pollMap",
        id: "pollMap",
    },
    {
        title: "Tech Blog: Create Blogs and Leave Comments",
        name: "Tech Blog",
        body: "The Tech Blog application allows a user to create an account, which enables them to then access the blogs hosted on the site. A user can add, update, and delete blogs as well as comments posted under different user's blogs.",
        github: "https://github.com/lewisemarcus/TechBlog",
        deployed: "https://agile-dawn-55678.herokuapp.com/",
        cover: "/static/images/techBlog.jpg",
        contributions: "https://github.com/lewisemarcus/TechBlog/commits/main",
        tech: "JavaScript, Bootstrap, Express.js, Node.js, MySQL, Handlebars.js",
        role: "All",
        href: "#techBlog",
        id: "techBlog",
    },
    {
        title: "Note Taker: Take Notes Anywhere",
        name: "Note Taker",
        body: "In the Note Taker application, a user is able to create, update, and delete notes through database interaction.",
        github: "https://github.com/lewisemarcus/NoteTaker",
        deployed: "https://secure-fortress-62772.herokuapp.com/",
        cover: "/static/images/noteTaker.jpg",
        contributions: "https://github.com/lewisemarcus/NoteTaker/commits/main",
        tech: "JavaScript, Express.js, Node.js, MySQL, CSS",
        role: "All",
        href: "#noteTaker",
        id: "noteTaker",
    },
]

export const social = [
    {
        icon: <LinkedIn />,
        link: "https://www.linkedin.com/in/marcus-e-lewis/",
    },
    {
        icon: <GitHub />,
        link: "https://github.com/lewisemarcus",
    },
    {
        icon: <Phone />,
        link: "tel:+19493224186",
    },
]
