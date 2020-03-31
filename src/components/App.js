import React, {Component} from 'react';
import {Router, Route, Redirect, Switch} from "react-router-dom";
import history from "../history";

import Header from "./Header";
import StreamCreate from "./stream/StreamCreate";
import StreamDelete from "./stream/StreamDelete";
import StreamEdit from "./stream/StreamEdit";
import StreamList from "./stream/StreamList";
import StreamShow from "./stream/StreamShow";
import P404 from "./404";

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/delete/:id" exact component={StreamDelete}/>
                    <Route path="/edit/:id" component={StreamEdit}/>
                    <Route path="/create" exact component={StreamCreate}/>
                    <Route path="/show/:id" exact component={StreamShow}/>
                    <Route psth="/404" component={P404} exact/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        );
    }
}

export default App;
