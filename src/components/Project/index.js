import React from "react";
import dooziesImg from "../../assets/images/2doozies.jpeg";
import brainFoodImg from "../../assets/images/brain-food.jpeg";
import doozies2Img from "../../assets/images/2doozies2.0.jpeg";
import techBlogImg from "../../assets/images/tech-blog.jpeg";
import noteTakerImg from "../../assets/images/note-taker.jpeg";
import budgetTrackerImg from "../../assets/images/budget-tracker.jpeg";
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';


function Project() {
    return (
        <section id="work" class="portfolio">
            <h1>Portfolio</h1>
            <div class="flex-row">
                <div class="work-boxes section-body">
                    <div class="portfolioBoxes">
                        <h2>2doozies 2.0: A To-Do and Affirmation Web Application</h2>
                        <div class="portfolioImg" style={{
                        backgroundImage: `url(${doozies2Img})`}}></div>
                        <div class="portfolioIcons">
                            <a href="https://safe-dusk-34146.herokuapp.com/"><FaExternalLinkAlt /></a>
                            <a href="https://github.com/jstable1/2-doozies"><BsGithub /></a>
                        </div>
                        <h3>Technologies: React.js, MongoDB, Express.js, GraphQL, Apollo Server, JSON Web Token, Node.js, HTML and CSS</h3>
                    </div>
                    <div class="portfolioBoxes">
                        <h2>2doozies: A To-Do Web Application</h2>
                        <div class="portfolioImg" style={{
                        backgroundImage: `url(${dooziesImg})`}}></div>
                        <div class="portfolioIcons">
                            <a href="https://twodoozies-app.herokuapp.com/"><FaExternalLinkAlt /></a>
                            <a href="https://github.com/tyarchy/2Doozies"><BsGithub /></a>
                        </div>
                        <h3>Technologies: HTML, CSS, Handlebars, Express.js, Node.js, MySQL and Sequelize</h3>
                    </div>
                    <div class="portfolioBoxes">
                        <h2>Brain Food: A Podcast and Book Search Web Application</h2>
                        <div class="portfolioImg" style={{
                        backgroundImage: `url(${brainFoodImg})`}}></div>
                        <div class="portfolioIcons">
                            <a href="https://lillylav.github.io/brain-food/"><FaExternalLinkAlt /></a>
                            <a href="https://github.com/lillylav/brain-food"><BsGithub /></a>
                        </div>
                        <h3>Technologies: HTML, CSS (Bulma), JavaScript, Apple iTunes API and Open Library API</h3>
                    </div>
                    <div class="portfolioBoxes">
                        <h2>Tech Blog: A CMS-Style Blog Site</h2>
                        <div class="portfolioImg" style={{
                        backgroundImage: `url(${techBlogImg})`}}></div>
                        <div class="portfolioIcons">
                            <a href="https://quiet-dawn-26561.herokuapp.com/"><FaExternalLinkAlt /></a>
                            <a href="https://github.com/jstable1/tech-blog"><BsGithub /></a>
                        </div>
                        <h3>Technologies: MySQL, Sequelize, Express.js, Node.js, Handlebars, HTML and CSS</h3>
                    </div>
                    <div class="portfolioBoxes">
                        <h2>Budget Tracker: A Budget Tracking Application</h2>
                        <div class="portfolioImg" style={{
                        backgroundImage: `url(${budgetTrackerImg})`}}></div>
                        <div class="portfolioIcons">
                            <a href="https://nameless-river-62078.herokuapp.com/"><FaExternalLinkAlt /></a>
                            <a href="https://github.com/jstable1/budget-tracker"><BsGithub /></a>
                        </div>
                        <h3>Technologies: MongoDB, Mongoose, Express.js, HTML and CSS</h3>
                    </div>
                    <div class="portfolioBoxes">
                        <h2>Note Taker: A Note Taking Application</h2>
                        <div class="portfolioImg" style={{
                        backgroundImage: `url(${noteTakerImg})`}}></div>
                        <div class="portfolioIcons">
                            <a href="https://immense-dawn-25672.herokuapp.com/"><FaExternalLinkAlt /></a>
                            <a href="https://github.com/jstable1/note-taker"><BsGithub /></a>
                        </div>
                        <h3>Technologies: Express.js, HTML and CSS</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;