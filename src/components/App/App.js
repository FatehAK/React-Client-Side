import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Nav from '../Nav/Nav';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Nav />
                <Route exact path="/" render={() => (
                    <Home text="Home (from props)" />
                )} />
                <Route path="/contact" render={() => (
                    <Contact text="Contact us (from props)" />
                )} />
                <Route path="/about" render={() => (
                    <About text="About us (from props)" />
                )} />
            </div>
        );
    }
}

export default App;
