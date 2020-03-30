import React, {Component} from "react";
import {connect} from 'react-redux';
import _ from 'lodash';

import {getStream, updateStream} from "../../actions";
import StreamForm from "./StreamForm";
import {formFields} from "./StreamForm";

class StreamEdit extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getStream(this.props.match.params.id);
    }

    onSubmit(formValues) {
        this.props.updateStream(this.props.match.params.id, formValues);
    }

    render() {
        if (this.props.stream) {
            return (
                <div>
                    <h3>Edit A Stream</h3>
                    <StreamForm onSubmit={this.onSubmit}
                                initialValues={_.pick(this.props.stream, formFields.title, formFields.description)}/>
                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        stream: state.streams[props.match.params.id]
    };
};

export default connect(mapStateToProps, {getStream, updateStream})(StreamEdit);