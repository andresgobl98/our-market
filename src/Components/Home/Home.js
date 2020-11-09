import React, { Component } from 'react';
import Highlights from '../Highlights/Highlights';
import Dashboard from '../Dashboard/Dashboard';
import Presentation from '../Presentation/Presentation';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/';

class Home extends Component(props) {

    componentWillReceiveProps (nextState) {
        this.setState({
            posts: nextState.posts,
        });
    }

    componentDidMount () {
        this.props.onFetchPosts();
    }


    highArray = () => props.posts.filter(function (pst) {
        return pst.highlighted
    })

    render () {
        return (
            <div>
                <Presentation />
                <Highlights highlights={this.highArray()} />
                <Dashboard posts={props.posts} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        posts: state.postsStore.posts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () =>dispatch(actionCreators.fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
