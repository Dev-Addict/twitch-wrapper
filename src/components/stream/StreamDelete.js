import React, {Component} from "react";
import {connect} from 'react-redux';
import Modal from "../Modal";

import {getStream, deleteStream} from "../../actions";
import {formFields} from "./StreamForm";
import '../../style/components/stream/StreamDelete.css';
import history from "../../history";

class StreamDelete extends Component{
    componentDidMount() {
        this.props.getStream(this.props.match.params.id);
        this.onDeleteClicked = this.onDeleteClicked.bind(this);
    }

    componentWillUnmount() {
        document.getElementById('modal').classList.remove('modal-show');
    }

    onDeleteClicked(event) {
        this.props.deleteStream(this.props.match.params.id);
    }

    onCancelClicked(event) {
        history.push('/');
    }

    render() {
        document.getElementById('modal').classList.add('modal-show');
        if (this.props.stream) {
            return (
                <Modal>
                    <div className="stream-delete-header">Delete Stream</div>
                    <div className="stream-delete-content">
                        {`Do you want to delete stream with title of "${this.props.stream[formFields.title]}" and id of ${this.props.stream.id}?`}
                    </div>
                    <div className="stream-delete-pos-button" onClick={this.onDeleteClicked}>Delete Stream</div>
                    <div className="stream-delete-neg-button" onClick={this.onCancelClicked}>Cancel</div>
                </Modal>
            );
        }
        return (
            <Modal loading="true"/>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        stream: state.streams[props.match.params.id]
    };
};

export default connect(mapStateToProps, {getStream, deleteStream})(StreamDelete);