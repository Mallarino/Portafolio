import React from 'react'

import { Link } from "react-router-dom";
import profilePhoto from "../assets/profilePhoto.jpg";
import SearchInput from '../components/SearchInput';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-white">

            {/* Navbar */}
            <div className="flex justify-end items-center gap-6 px-8 py-4 text-gray-600">

                <a
                    href="https://github.com/Mallarino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors duration-200"
                >
                    Github
                </a>

                <img
                    src={profilePhoto}
                    className="w-12 h-12 rounded-full object-cover object-right border border-gray-200 shadow-sm"
                    alt="Profile"
                />
            </div>
            {/* fin navbar */}

            {/* Contenido central */}
            <div className="flex-1 flex flex-col items-center pt-24">

                <div className="flex text-7xl font-montserrat tracking-wide mb-7">
                    <h1 className='font-bold text-blue-600'>M</h1>
                    <h1 className='font-bold text-red-600'>a</h1>
                    <h1 className='font-bold text-yellow-600'>l</h1>
                    <h1 className='font-bold text-blue-600'>l</h1>
                    <h1 className='font-bold text-green-600'>a</h1>
                    <h1 className='font-bold text-red-600'>r</h1>
                    <h1 className='font-bold text-yellow-600'>i</h1>
                    <h1 className='font-bold text-blue-600'>n</h1>
                    <h1 className='font-bold text-green-600'>o</h1>
                </div>

                <SearchInput />

            </div>

        </div>
    );
}
