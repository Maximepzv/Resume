import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import More from '../components/More';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import { ReactComponent as Wave } from '../assets/images/wave.svg';

const Home = () => {
    return (
        <div>
            <Header />
            <Wave style={{ marginBottom: '-3%' }} />
            <About />
            <Experience />
            <More />
            <Footer />
        </div>
    );
};

export default Home;
