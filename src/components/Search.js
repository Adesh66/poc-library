'use client';
import React, { useState } from 'react';

const Search = (props) => {
    const { changeHandler, defaultValue = '' } = props;
    const [searchValue, setSearchValue] = useState(defaultValue);

    const searchChangeHandler = (e) => {
        const val = e.target.value;
        setSearchValue(val);
        if (changeHandler) {
            changeHandler(val);
        }
    };
    return (
        <div className='input-search-container w-full relative flex my-4 py-2'>
            <div className='icon absolute top-1/2 left-2 -translate-y-1/2 w-6 h-6'>
                <span className='material-symbols-outlined'>search</span>
            </div>
            <input
                type='search'
                placeholder='Type to search'
                className='border rounded-lg px-4 py-3 w-full pl-10'
                onChange={searchChangeHandler}
                value={searchValue}
            />
        </div>
    );
};

export default Search;
