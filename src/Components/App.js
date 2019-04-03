import React from 'react';
import {connect} from 'react-redux'; 
import {Route, Link} from 'react-router-dom';
import CommentBox from 'Components/CommentBox';
import CommentList from 'Components/CommentList';
import {changeAuth} from 'Actions';

class App extends React.Component {
    renderButton () {
        if (this.props.auth) {
            return (
                <button onClick = {() => this.props.changeAuth(false)}>Sign Out</button>
            );
        }
        else { 
            return (
                <button onClick = {() => this.props.changeAuth(true)}>Sign In</button>
            );
        }
    }
    
    renderHeader () {
        return (
            <ul>
                <li>
                    <Link to = '/'>Home</Link>
                </li>
                <li>
                    <Link to = '/post'>Post</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        );
    }
    
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path = '/' exact component = {CommentList}/>
                <Route path = '/post' component = {CommentBox}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {auth: state.auth};
};

export default connect(mapStateToProps, {
    changeAuth: changeAuth
})(App); 