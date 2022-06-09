const Soundify = {
    title: "Soundify: Listen/Jive/Relax",
    short: "Soundify",
    body: "Soundify is a online music player where users are required to create an account or login to our site to listen, upload, and comment on songs. Users can search for songs and create and update playlists.",
    github: "https://github.com/lewisemarcus/Soundify",
    deployed: "https://soundify-home.herokuapp.com/",
    image: "/static/images/cards/soundify.png",
    delay: 250,
    contributions:
        "https://github.com/lewisemarcus/Soundify/commits?author=lewisemarcus",
    tech: "MongoDB Atlas, Amazon S3, GraphQL, React, Node.js,",
    role: "Database design and implementation, front-end integration, audio spectrum/waveform creation, audio player integration",
    href: "#soundify",
    id: "soundify",
}

const BugZapper = {
    title: "Bug Zapper: Bug Tracking Application",
    short: "Bug Zapper",
    body: "This website allows a user to create an account and manage bugs relating to specific projects. A user can also add contributors to the project for assistance with management and updating the bugs. Each bug has a viewable history denoted by a blue hyperlink text of the bug's title. ",
    github: "https://github.com/lewisemarcus/bugTracker",
    deployed: "bug-zapper-app.herokuapp.com/",
    image: "/static/images/cards/bugTracker.png",
    delay: 500,
    contributions:
        "https://github.com/lewisemarcus/bugTracker/commits?author=lewisemarcus&before=94a5aceb4ad84b78d80588bd8ba28c319bd6ecdc+35",
    tech: "JavaScript, Express.js, Handlebars.js, MySQL, Node.js, CSS",
    role: "RESTful API design, Database design, Front-end integration with API",
    href: "#bugZapper",
    id: "bugZapper",
}

const PollutionMap = {
    title: "Bluer Skies: Air Quality Index Map",
    short: "Bluer Skies",
    body: "This website displays a scrollable/interactive map with a grid of colored points representing fine particle pollution levels. It uses (quasi) unlimited free APIs.",
    github: "https://github.com/lewisemarcus/PollutionMap",
    deployed: "https://lewisemarcus.github.io/PollutionMap/",
    image: "/static/images/cards/pollMap.PNG",
    delay: 750,
    contributions:
        "https://github.com/lewisemarcus/PollutionMap/commits?author=lewisemarcus",
    tech: "JavaScript, Bulma, OpenLayers Maps, WAQI API, IP API",
    role: "Map Editor, Air Quality API calls, Front-end integration, Some front-end design",
    href: "#pollMap",
    id: "pollMap",
}

const TechBlog = {
    title: "Tech Blog: Create Blogs and Leave Comments",
    short: "Tech Blog",
    body: "The Tech Blog application allows a user to create an account, which enables them to then access the blogs hosted on the site. A user can add, update, and delete blogs as well as comments posted under different user's blogs.",
    github: "https://github.com/lewisemarcus/TechBlog",
    deployed: "https://agile-dawn-55678.herokuapp.com/",
    image: "/static/images/cards/techBlog.png",
    delay: 1000,
    contributions: "https://github.com/lewisemarcus/TechBlog/commits/main",
    tech: "JavaScript, Bootstrap, Express.js, Node.js, MySQL, Handlebars.js",
    role: "All",
    href: "#techBlog",
    id: "techBlog",
}

const NoteTaker = {
    title: "Note Taker: Take Notes Anywhere",
    short: "Note Taker",
    body: "In the Note Taker application, a user is able to create, update, and delete notes through database interaction.",
    github: "https://github.com/lewisemarcus/NoteTaker",
    deployed: "https://secure-fortress-62772.herokuapp.com/",
    image: "/static/images/cards/noteTaker.png",
    delay: 1250,
    contributions: "https://github.com/lewisemarcus/NoteTaker/commits/main",
    tech: "JavaScript, Express.js, Node.js, MySQL, CSS",
    role: "All",
    href: "#noteTaker",
    id: "noteTaker",
}

const WeatherDash = {
    title: "Weather Dashboard: 5-Day Forecart for Cities",
    short: "Weather Dashboard",
    body: "This web application allows a user to search any city of their choosing and receive a 5-Day forecast relative to the time zone of the city.",
    github: "https://github.com/lewisemarcus/WeatherDashboard",
    deployed: "https://lewisemarcus.github.io/WeatherDashboard/",
    image: "/static/images/cards/WeatherDash.png",
    delay: 1500,
    contributions:
        "https://github.com/lewisemarcus/WeatherDashboard/commits/main",
    tech: "JavaScript, HTML, CSS, OpenWeather API",
    role: "All",
    href: "#weatherDash",
    id: "weatherDash",
}

const ProjectList = [BugZapper, PollutionMap, TechBlog, NoteTaker, WeatherDash]

export { ProjectList, Soundify }
