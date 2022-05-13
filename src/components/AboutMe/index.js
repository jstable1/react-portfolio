import React from "react";
import MeImg from '../../assets/images/Me.jpeg';

function AboutMe() {

    return (
        <section id="about-me" class="about">
            <h1>About Me</h1>
            <img src={MeImg} className="" style={{ width: "10%" }} alt="me" />
            <p>
                I'm an up and coming web developer in Herriman, Utah. After 8.5 years in many roles with American Express I decided to switch careers to something that will be more mentally challenging. 
                I graduated high school with an Associates Degree and then went on to get a Juris Doctorate which was possible because i'm a quick learner and have excellent communication skills which helped for numerous group projects. I'm incredibly detail-oriented which led to me getting three different coaching roles while employed at American Express since compliance with regulations is paramount in the financial services industry.
                Outside of work I love to enjoy the outdoors from trailing riding with my horse to hiking with my dogs.
            </p>
        </section>
    );
}

export default AboutMe;