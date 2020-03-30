import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component{
    render() {
        return ReactDOM.createPortal((
            <div>
                Are you sure you want to delete this stream?
            </div>
        ), document.getElementById('modal'));
    }
}

export default Modal;