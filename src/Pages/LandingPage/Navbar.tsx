// import React from 'react'

import { Link, useNavigate } from "react-router-dom"
// import DefaultButton from "../../Components/DefaultButton"
import { useState } from "react"

const Navbar = () => {
    const navigate = useNavigate()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between">

                {/* Title */}
                <div className="text-white font-bold text-lg">
                    <Link to="/">My App</Link>
                </div>

                {/* Menu Links (Desktop) */}
                <div className="hidden md:flex space-x-6">

                    <Link to="/"
                        className="text-white hover:text-gray-200"
                    >
                        Home
                    </Link>

                    <Link to="/feed"
                        className="text-white hover:text-gray-200"
                    >
                        Feed
                    </Link>

                    <Link to="/profile"
                        className="text-white hover:text-gray-200"
                    >
                        Profile
                    </Link>

                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">
                        Logout
                    </button>

                </div>

                {/* Mobile Menu Button */}
                <div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={handleMobileMenuToggle}
                            className="text-white focus:outline-none"
                        >
                            {/* Hamburger Icon */}
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Links */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col space-y-4 mt-4">
                    <Link
                        to="/"
                        className="text-white hover:text-gray-200 block text-center"
                        onClick={handleMobileMenuToggle}
                    >
                        Home
                    </Link>
                    <Link
                        to="/feed"
                        className="text-white hover:text-gray-200 block text-center"
                        onClick={handleMobileMenuToggle}
                    >
                        Feed
                    </Link>
                    <Link
                        to="/profile"
                        className="text-white hover:text-gray-200 block text-center"
                        onClick={handleMobileMenuToggle}
                    >
                        Profile
                    </Link>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded block mx-auto hover:bg-red-700"
                        onClick={handleMobileMenuToggle}
                    >
                        Logout
                    </button>
                </div>
            )}

        </nav>

    )
}

export default Navbar