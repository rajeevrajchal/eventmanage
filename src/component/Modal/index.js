import React from 'react';
import './Modal.css'

const Modal = (props) => {
    const {title,children,close} = props;
    return (
        <div>
            <div className="modal-overlay" />
            <div className="modalWrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modals">
                    <div className="modalHeader">
                        <div className="title">
                            <h4>{title}</h4>
                        </div>
                        
                        <button type="button" className="modalCloseButton"
                                data-dismiss="modal" aria-label="Close"
                                onClick={close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modalBody">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;