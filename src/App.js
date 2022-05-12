import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <Project></Project>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default App;