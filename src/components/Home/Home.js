import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import './Home.css';
import img from '../../img/home.jpg';

class Home extends React.Component {
    state = {
        text: 'Home (from state)'
    };

    async componentDidMount() {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const data = await response.json();
        // this.setState({
        //     posts: data.slice(0, 5)
        // });
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="home">
                <Helmet>
                    <title>Home Page</title>
                </Helmet>
                <div className="home-state">{this.state.text}</div>
                <div className="home-props">{this.props.text}</div>
                {this.props.posts && this.props.posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
                <img src={img} alt="home" width="200px" height="150px" />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(Home);
