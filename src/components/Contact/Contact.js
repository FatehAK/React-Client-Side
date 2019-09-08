import React from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';
import img from '../../img/contact.jpg';

class Contact extends React.Component {
    state = {
        text: 'Contact us (from state)'
    };

    render() {
        return (
            <div className="contact">
                <Helmet>
                    <title>Contact Page</title>
                </Helmet>
                <div className="contact-state">{this.state.text}</div>
                <div className="contact-props">{this.props.text}</div>
                <img src={img} alt="contact" width="200px" height="150px" />
            </div>
        );
    }
}

export default Contact;
