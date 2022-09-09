import dooziesImg from "../../assets/images/2doozies.jpeg";
import brainFoodImg from "../../assets/images/brain-food.jpeg";
import doozies2Img from "../../assets/images/2doozies2.0.jpeg";
import techBlogImg from "../../assets/images/tech-blog.jpeg";
import noteTakerImg from "../../assets/images/note-taker.jpeg";
import budgetTrackerImg from "../../assets/images/budget-tracker.jpeg";

const Projects = [
    {
        name: '2doozies 2.0: A To-Do and Affirmation Web Application',
        img: doozies2Img,
        appLink: "https://safe-dusk-34146.herokuapp.com/",
        github: "https://github.com/jstable1/2-doozies",
        tech: 'React.js, MongoDB, Express.js, GraphQL, Apollo Server, JSON Web Token, and Node.js'
    },
    {
        name: '2doozies: A To-Do Web Application',
        img: dooziesImg,
        appLink: "https://twodoozies-app.herokuapp.com/",
        github: "https://github.com/tyarchy/2Doozies",
        tech: 'Handlebars, Express.js, Node.js, MySQL and Sequelize'
    },
    {
        name: 'Brain Food: A Podcast and Book Search Web Application',
        img: brainFoodImg,
        appLink: "https://jstable1.github.io/brain-food/",
        github: "https://github.com/jstable1/brain-food",
        tech: 'CSS (Bulma), JavaScript, Apple iTunes API and Open Library API'
    },
    {
        name: 'Tech Blog: A CMS-Style Blog Site',
        img: techBlogImg,
        appLink: "https://quiet-dawn-26561.herokuapp.com/",
        github: "https://github.com/jstable1/tech-blog",
        tech: 'MySQL, Sequelize, Express.js, Node.js and Handlebars'
    },
    {
        name: 'Budget Tracker: A Budget Tracking Application',
        img: budgetTrackerImg,
        appLink: "https://nameless-river-62078.herokuapp.com/",
        github: "https://github.com/jstable1/budget-tracker",
        tech: 'MongoDB, Mongoose and Express.js'
    },
    {
        name: 'Note Taker: A Note Taking Application',
        img: noteTakerImg,
        appLink: "https://immense-dawn-25672.herokuapp.com/",
        github: "https://github.com/jstable1/note-taker",
        tech: 'Express.js'
    },
]

export default Projects;