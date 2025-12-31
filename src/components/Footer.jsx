import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-white shadow dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl px-3 text-center py-6 flex justify-center items-center gap-2">
                    <span><i className="text-gray-500 fa-solid fa-cloud"></i></span>
                    <span className="flex items-center gap-1 text-sm font-bold uppercase text-gray-500 sm:text-center dark:text-gray-400 leading-relaxed"><span className="text-lg">&copy;</span> 2025 <a href="https://www.instagram.com/suraj_verma_003/" className="hover:underline">Suraj</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}

export default Footer
