import React from 'react';

const Navbar = ({location}) => {
    return (
        <nav className="poppins bg-white dark:bg-gray-800 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex items-center justify-between gap-4 flex-wrap mx-auto p-4">
                <a href="/" className="flex items-center gap-1">
                    <span><i className="text-2xl text-gray-400 fa-solid fa-cloud"></i></span>
                    <span className="self-center text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap dark:text-neutral-100">Weather</span>
                </a>
                <p className="text-neutral-400 text-sm sm:text-xl text-wrap"><span className="text-white location">{location ? location.name : ''} ({location ? location.country : 'location'})</span></p>
            </div>
        </nav>
    )
}

export default Navbar
