import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getStreams} from "../../actions";
import {formFields} from "./StreamForm";
import '../../style/components/stream/StreamList.css'

class StreamList extends Component{
    componentDidMount() {
        this.props.getStreams();
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="stream-list-stream-item" key={stream.id}>
                    <div className="stream-list-stream-picture">
                    </div>
                    <div className="stream-list-stream-title">Title : {stream[formFields.title]}</div>
                    <div className="stream-list-stream-description">Description : {stream[formFields.description]}</div>
                    {this.renderAdmin(stream)}
                </div>
            );
        });
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.userId) {
            return (
                <div>
                    <Link className="stream-list-stream-edit" to={`/edit/${stream.id}`}>Edit</Link>
                    <Link className="stream-list-stream-delete" to={`/delete/${stream.id}`}>DELETE</Link>
                </div>
            );
        }
        return null;
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <Link to="/create" className="stream-list-create">Create</Link>
            );
        }
        return null;
    }

    render() {
        return (
            <div className="stream-list-stream-container">
                <h2>Streams</h2>
                <div className="stream-list-stream-list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        userId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {getStreams})(StreamList);