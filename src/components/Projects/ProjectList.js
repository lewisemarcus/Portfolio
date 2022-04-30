const BugZapper = {
    title: "Bug Zapper: Bug Tracking Application",
    body: "This website allows a user to create an account and manage bugs relating to specific projects. A user can also add contributors to the project for assistance with management and updating the bugs. Each bug has a viewable history denoted by a blue hyperlink text of the bug's title. ",
    github: "https://github.com/lewisemarcus/bugTracker",
    deployed: "bug-zapper-app.herokuapp.com/",
    image: "/static/images/cards/bugTracker.png",
    delay: 250,
}

const PollutionMap = {
    title: "Bluer Skies: Air Quality Index Map",
    body: "This website displays a scrollable/interactive map with a grid of colored points representing fine particle pollution levels. It uses (quasi) unlimited free APIs.",
    github: "https://github.com/lewisemarcus/PollutionMap",
    deployed: "https://lewisemarcus.github.io/PollutionMap/",
    image: "/static/images/cards/pollMap.PNG",
    delay: 500,
}

const TechBlog = {
    title: "Tech Blog: Create Blogs and Leave Comments",
    body: "The Tech Blog application allows a user to create an account, which enables them to then access the blogs hosted on the site. A user can add, update, and delete blogs as well as comments posted under different user's blogs.",
    github: "https://github.com/lewisemarcus/TechBlog",
    deployed: "https://agile-dawn-55678.herokuapp.com/",
    image: "/static/images/cards/techBlog.png",
    delay: 750,
}

const NoteTaker = {
    title: "Note Taker: Take Notes Anywhere",
    body: "In the Note Taker application, a user is able to create, update, and delete notes through database interaction.",
    github: "https://github.com/lewisemarcus/NoteTaker",
    deployed: "https://secure-fortress-62772.herokuapp.com/",
    image: "/static/images/cards/noteTaker.png",
    delay: 1000,
}

const WeatherDash = {
    title: "Weather Dashboard: 5-Day Forecart for Cities",
    body: "This web application allows a user to search any city of their choosing and receive a 5-Day forecast relative to the time zone of the city.",
    github: "https://github.com/lewisemarcus/WeatherDashboard",
    deployed: "https://lewisemarcus.github.io/WeatherDashboard/",
    image: "/static/images/cards/WeatherDash.png",
    delay: 1250,
}

const ProjectList = [PollutionMap, TechBlog, NoteTaker, WeatherDash]

export { ProjectList, BugZapper }
