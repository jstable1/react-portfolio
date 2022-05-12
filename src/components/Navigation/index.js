import React from "react";

function Navigation(props) {
//   const {

//   } = props;

  return (
    <nav>
    <ul className="flex-row">
        <li>
            <a href="#about-me">About Me</a>
        </li>
        <li>
            <a href="#work">Portfolio</a>
        </li>
        <li>
            <a href="#contact-me">Contact</a>
        </li>
        <li>
            <a href="./resume.pdf">Resume</a>
        </li>
    </ul>
    </nav>
  );
}

export default Navigation;