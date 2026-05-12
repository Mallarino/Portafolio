import React, { useState } from 'react'
import SearchInput from '../components/SearchInput'
import { FaToolbox, FaRegBuilding, FaGraduationCap, FaSearch } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import Letters from '../components/Letters'
import profilePhoto from "../assets/profilePhoto.jpg"
import { NavLink } from "react-router-dom";
import { MdOutlineGridOn } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import AppSelection from './AppSelection';
import LanguageSwitcher from './LanguageSwitcher';



export default function Navbar() {

    const [show, setShow] = useState(false)
    const [showLanguage, setShowLanguage] = useState(false)

    const { t } = useTranslation()


    return (
        <>
            <div className='flex items-center m-7 gap-10'>

                <Letters />

                <div className='hidden md:block'>
                    <SearchInput />
                </div>

                <div className='flex items-center ml-auto gap-10'>

                    <div className="relative">
                        <button onClick={() => setShowLanguage(!showLanguage)}>
                            <IoLanguage className="text-2xl text-gray-500 hover:text-gray-700" />
                        </button>

                        {showLanguage && (
                            <LanguageSwitcher closeMenu={() => setShowLanguage(false)} />
                        )}
                    </div>

                    <div className="relative">
                        <button onClick={() => setShow(!show)}>
                            <MdOutlineGridOn className="text-2xl text-gray-500 hover:text-gray-700" />
                        </button>

                        {show && <AppSelection />}
                    </div>

                    <img
                        src={profilePhoto}
                        className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm"
                        alt="Profile"
                    />

                </div>

            </div>

            <div className='flex justify-center gap-5 md:justify-start md:ml-65 md:gap-10 md:text-gray-600'>

                <NavLink
                    to="/todo"
                    className={({ isActive }) =>
                        `flex items-center gap-2 pb-2 ${isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-gray-600"
                        }`
                    }
                >
                    <FaSearch className='hidden md:block'/> {t("navbar.todo")}
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
                    <FaToolbox className='hidden md:block'/> {t("navbar.proyectos")}
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
                    <FaRegBuilding className='hidden md:block'/> {t("navbar.experiencia")}
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
                    <FaGraduationCap className='hidden md:block'/> {t("navbar.educacion")}
                </NavLink>




            </div>
            <hr className="border-0 h-px bg-gray-200 my-2" />
        </>
    )
}
