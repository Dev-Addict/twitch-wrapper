import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

import '../../style/components/stream/StreamForm.css';

export const formName = 'STREAM_FORM';
export const formFields = {
    title: 'TITLE',
    description: 'DESCRIPTION'
};

class StreamForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    renderInput({input, label, meta}) {
        return (
            <div>
                <label className="stream-form-input-label">{label}</label>
                <input {...input} className="stream-form-input" placeholder={label}/>
                <div className="stream-form-input-error">{meta.touched&&!meta.active?meta.error:''}</div>
            </div>
        );
    }

    onSubmit(formValues) {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="stream-form-container" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name={formFields.title} component={this.renderInput}
                       label={formFields.title.charAt(0) + formFields.title.substr(1).toLowerCase()}/>
                <Field name={formFields.description} component={this.renderInput}
                       label={formFields.description.charAt(0) + formFields.description.substr(1).toLowerCase()}/>
                <button className="stream-form-submit" type="submit">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues[formFields.title]) {
        errors[formFields.title] = `You Must Enter Valid ${formFields.title}.`;
    }

    if (!formValues[formFields.description]) {
        errors[formFields.description] = `You Must Enter Valid ${formFields.description}.`;
    }

    return errors;
};

export default reduxForm({
    form: formName,
    validate
})(StreamForm);