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
                <SearchInput />


                <div className='flex items-center ml-auto gap-10'>
                    <div className="relative">
                        <button onClick={() => setShowLanguage(!showLanguage)}>
                            <IoLanguage className="text-2xl text-gray-500 hover:text-gray-700" />
                        </button>
                        {showLanguage && (
                            <div>
                                <LanguageSwitcher closeMenu={() => setShowLanguage(false)}/>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button onClick={() => setShow(!show)}>
                            <MdOutlineGridOn className="text-2xl text-gray-500 hover:text-gray-700" />
                        </button>

                        {show && (
                            <div>
                                <AppSelection />
                            </div>
                        )}

                    </div>

                    <img
                        src={profilePhoto}
                        className="w-12 h-12 ml-auto rounded-full object-cover object-right border border-gray-200 shadow-sm"
                        alt="Profile"
                    />

                </div>

            </div>

            <div className='flex gap-10 ml-65 text-gray-600'>

                <NavLink
                    to="/todo"
                    className={({ isActive }) =>
                        `flex items-center gap-2 pb-2 ${isActive
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-gray-600"
                        }`
                    }
                >
                    <FaSearch /> {t("navbar.todo")}
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
                    <FaToolbox /> {t("navbar.proyectos")}
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
                    <FaRegBuilding /> {t("navbar.experiencia")}
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
                    <FaGraduationCap /> {t("navbar.educacion")}
                </NavLink>




            </div>
            <hr className="border-0 h-px bg-gray-200 my-2" />
        </>
    )
}
