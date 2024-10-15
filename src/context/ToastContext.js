'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => {
    return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback(({title ='Successfully', message}) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, title, message }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={addToast}>
            {children}
            <ToastContainer toasts={toasts} />
        </ToastContext.Provider>
    );
};

const ToastContainer = ({ toasts }) => {
    return (
        <div className='fixed top-4 right-4 z-50' style={toastContainerStyle}>
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className='bg-blue-950 text-white p-4 mb-2 rounded-xl flex flex-col'
                    style={toastStyle}
                >
                    <p className='text-md font-regular '>{toast.title || 'Successfull'}</p>
                    <p className='text-sm'>{toast.message}</p>
                </div>
            ))}
        </div>
    );
};
// Basic styles for toast
const toastContainerStyle = {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    zIndex: 9999,
};

const toastStyle = {
    background: '#172554',
    color: '#fff',
    padding: '2rem',
    marginBottom: '1rem',
    borderRadius: '1rem',
};
