'use client';

import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='close-button' onClick={onClose}>
                    <span className='material-symbols-outlined'>close</span>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
