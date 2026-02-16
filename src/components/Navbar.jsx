import React from 'react'
import SearchInput from '../components/SearchInput'
import { FaToolbox, FaRegImage, FaRegBuilding, FaGraduationCap    } from "react-icons/fa";
import Letters from '../components/Letters'
import profilePhoto from "../assets/profilePhoto.jpg"

export default function Navbar() {
    return (
        <>
            <div className='flex items-center m-7 gap-10'>
                <Letters />
                <SearchInput />
                <img
                    src={profilePhoto}
                    className="w-12 h-12 ml-auto rounded-full object-cover object-right border border-gray-200 shadow-sm"
                    alt="Profile"
                />
            </div>

            <div className='flex gap-10 text-sm ml-70'>
                <div className='flex items-center gap-2'>
                    <FaToolbox />
                    <span>Proyectos</span>
                </div>
                <div className='flex items-center gap-2'>
                    <FaRegImage />
                    <span>Imagenes</span>
                </div>
                <div className='flex items-center gap-2'>
                    <FaRegBuilding />
                    <span>Experiencia</span>
                </div>
                <div className='flex items-center gap-2'>
                    <FaGraduationCap />
                    <span>Educacion</span>
                </div>
                

            </div>
        </>
    )
}
