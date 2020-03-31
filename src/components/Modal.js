import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../style/components/Modal.css';

class Modal extends Component{
    render() {
        console.log(this.props);
        return ReactDOM.createPortal((
            <div className="modal-container">
                {this.props.children}
            </div>
        ), document.getElementById('modal'));
    }
}

export default Modal;