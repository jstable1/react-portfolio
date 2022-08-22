import React from "react";
import dooziesImg from "../../assets/images/2doozies.jpeg";
import brainFoodImg from "../../assets/images/brain-food.jpeg";
import doozies2Img from "../../assets/images/2doozies2.0.jpeg";
import techBlogImg from "../../assets/images/tech-blog.jpeg";
import noteTakerImg from "../../assets/images/note-taker.jpeg";
import budgetTrackerImg from "../../assets/images/budget-tracker.jpeg";
import { BsGithub } from 'react-icons/bs';


function Project() {
    return (
        <section id="work" class="portfolio">
            <h1>Portfolio</h1>
            <div class="flex-row">
                <div class="work-boxes section-body">
                    <div class="portfolioItems" style={{
                        backgroundImage: `url(${doozies2Img})`}}>
                        <h2>
                            <a href="https://safe-dusk-34146.herokuapp.com/">2doozies 2.0</a>
                            <a href="https://github.com/jstable1/2-doozies"><BsGithub /></a>
                        </h2>
                        <h5>React.js/MongoDB/GraphQL/Apollo Server/JWT</h5>
                    </div>
                    <div class="portfolioItems" style={{
                        backgroundImage: `url(${dooziesImg})`}}>
                        <h2>
                            <a href="https://twodoozies-app.herokuapp.com/">2doozies</a>
                            <a href="https://github.com/tyarchy/2Doozies"><BsGithub /></a>
                        </h2>
                        <h5>JavaScript/Handlebars</h5>
                    </div>
                    <div class="portfolioItems" style={{
                        backgroundImage: `url(${brainFoodImg})`}}>
                        <h2> 
                            <br></br><br></br>
                            <a href="https://lillylav.github.io/brain-food/">Brain Food</a>
                            <a href="https://github.com/lillylav/brain-food"><BsGithub /></a>
                        </h2>
                        <h5>APIs</h5>
                    </div>
                    <div class="portfolioItems" style={{
                        backgroundImage: `url(${techBlogImg})`}}>
                        <h2>
                        <br></br><br></br><br></br>
                            <a href="https://quiet-dawn-26561.herokuapp.com/">Tech Blog</a>
                            <a href="https://github.com/jstable1/tech-blog"><BsGithub /></a>
                        </h2>
                        <h5>Sequelize/Express/Handlebars</h5>
                    </div>
                    <div class="portfolioItems portfolioItemsBT" style={{
                        backgroundImage: `url(${budgetTrackerImg})`}}>
                        <h2>
                        <br></br><br></br>
                            <a href="https://nameless-river-62078.herokuapp.com/">Budget Tracker</a>
                            <a href="https://github.com/jstable1/budget-tracker"><BsGithub /></a>
                        </h2>
                        <h5 style={{ color: 'rgb(244 68 55'}}>MongoDB</h5>
                    </div>
                    <div class="portfolioItems" style={{
                        backgroundImage: `url(${noteTakerImg})`}}>
                        <h2>
                        <br></br>
                            <a href="https://immense-dawn-25672.herokuapp.com/">Note Taker</a>
                            <a href="https://github.com/jstable1/note-taker"><BsGithub /></a>
                        </h2>
                        <h5>Express.js</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;