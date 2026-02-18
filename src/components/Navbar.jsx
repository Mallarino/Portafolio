import React from 'react'
import SearchInput from '../components/SearchInput'
import { FaToolbox, FaRegImage, FaRegBuilding, FaGraduationCap, FaSearch } from "react-icons/fa";
import Letters from '../components/Letters'
import profilePhoto from "../assets/profilePhoto.jpg"
import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <div className='flex items-center m-7 gap-8'>
                <Letters />
                <SearchInput />
                <img
                    src={profilePhoto}
                    className="w-12 h-12 ml-auto rounded-full object-cover object-right border border-gray-200 shadow-sm"
                    alt="Profile"
                />
            </div>

            <div className='flex gap-6 ml-65 text-gray-600'>

                <NavLink
                    to="/todo"
                    className={({ isActive }) =>
                        `flex items-center gap-2 pb-2 ${isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-gray-600"
                        }`
                    }
                >
                    <FaSearch /> Todo
                </NavLink>

                <NavLink
                    to="/proyectos"
                    className={({ isActive }) =>
                        `flex items-center gap-2 pb-2 ${isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-gray-600"
                        }`
                    }
                >
                    <FaToolbox /> Proyectos
                </NavLink>


                <NavLink
                    to="/imagenes"
                    className={({ isActive }) =>
                        `flex items-center gap-2 pb-2 ${isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-gray-600"
                        }`
                    }
                >
                    <FaRegImage /> Imagenes
                </NavLink>


                <NavLink
                    to="/experiencia"
                    className={({ isActive }) =>
                        `flex items-center gap-2 pb-2 ${isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-gray-600"
                        }`
                    }
                >
                    <FaRegBuilding /> Experiencia
                </NavLink>


                <NavLink
                    to="/educacion"
                    className={({ isActive }) =>
                        `flex items-center gap-2 pb-2 ${isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-gray-600"
                        }`
                    }
                >
                    <FaGraduationCap /> Educacion
                </NavLink>


            </div>
            <hr className="border-0 h-px bg-gray-200 my-2" />
        </>
    )
}
