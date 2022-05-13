import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {

    return (
        <div>
            <Header></Header>
            <main>
                <AboutMe></AboutMe>
                <Project></Project>
                <Contact></Contact>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default App;