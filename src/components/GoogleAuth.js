import React, {Component} from "react";

export const clientId = '642199462068-22vbp1b4q1fekikmnu5t6o1qvqhef29r.apps.googleusercontent.com';
export const scope = 'email';

class GoogleAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {isSignedIn: undefined};
        this.signOut = this.signOut.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId,
                scope
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(() => {
                    this.setState({isSignedIn: this.auth.isSignedIn.get()});
                });
            });
        });
    }

    signOut() {
        this.auth.signOut();
    }

    signIn() {
        this.auth.signIn();
    }

    render() {
        if (this.state.isSignedIn) {
            return (
                <div className={`${this.props.className}`} onClick={this.signOut}>
                    Sign Out
                </div>
            );
        } else if (this.state.isSignedIn === false) {
            return (
                <div className={`${this.props.className}`} onClick={this.signIn}>
                    Sign In W/ Google
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

export default GoogleAuth;