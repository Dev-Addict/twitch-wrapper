import React, {Component} from 'react';
import {connect} from 'react-redux';

import {signIn, signOut} from '../actions';

export const clientId = '642199462068-22vbp1b4q1fekikmnu5t6o1qvqhef29r.apps.googleusercontent.com';
export const scope = 'email';

class GoogleAuth extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
        this.signIn = this.signIn.bind(this);
        this.onAuthChange = this.onAuthChange.bind(this);
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId,
                scope
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange(isSignedIn) {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    signOut() {
        this.auth.signOut();
    }

    signIn() {
        this.auth.signIn();
    }

    render() {
        if (this.props.isSignedIn) {
            return (
                <div className={`${this.props.className}`} onClick={this.signOut}>
                    Sign Out
                </div>
            );
        } else if (this.props.isSignedIn === false) {
            return (
                <div className={`${this.props.className}`} onClick={this.signIn}>
                    Sign In W/ <i className="fab fa-google"/>
                </div>
            );
        }
        return (
            <div className={`${this.props.className}`}>
                Loading
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);