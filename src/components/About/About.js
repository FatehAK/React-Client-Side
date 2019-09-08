import React from 'react';
import { Helmet } from 'react-helmet';
import './About.css';
import img from '../../img/about.jpg';

class About extends React.Component {
    state = {
        text: 'About us (from state)'
    };

    render() {
        return (
            <div className="about">
                <Helmet>
                    <title>About Page</title>
                </Helmet>
                <div className="about-state">{this.state.text}</div>
                <div className="about-props">{this.props.text}</div>
                <img src={img} alt="about" width="200px" height="150px" />
            </div>
        );
    }
}

export default About;
