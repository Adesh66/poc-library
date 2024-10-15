import React from 'react';

const Loader = ({ count = 2 }) => {
    return (
        <>
            {[...Array(count).keys()].map((item) => (
                <div className='skeleton-loader-background' key={item}></div>
            ))}
        </>
    );
};

export default Loader;
