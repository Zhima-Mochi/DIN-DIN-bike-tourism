import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoNavbar from './LogoNavbar';
import { Pivot as Hamburger } from 'hamburger-react'
import { AllShapeDataContext } from '../App';


export default function Header({ bg_color = 'transparent', logo_color }) {
    const allShapeData = useContext(AllShapeDataContext);
    const [isOpen, setOpen] = useState(false)
    const header_class = `select-none fixed w-screen item-center  top-0 z-30 bg-white ${bg_color == 'transparent' ? "text-white bg-opacity-10" : "text-black shadow-md"}`
    return (
        <>
            <header className={header_class}>
                <LogoNavbar logo_color={logo_color} />
                {/* Display in very large device */}
                <div className="hidden lg:block">
                    <div className="container px-10 m-auto flex justify-between items-center lg:h-20">
                        <span></span>
                        <ul className='flex'>
                            <li className='mr-5'>
                                <NavLink to='/search_map' className='header-nav-btn'>
                                    探索地圖
                                </NavLink>
                            </li>
                            <li className=''>
                                <NavLink to='/nearby' className='header-nav-btn'>
                                    尋找單車
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Display except very large device */}
                <div className="lg:hidden">
                    <div className="float-right mr-4">
                        <div className="container flex items-center h-16">
                            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
                        </div>
                    </div>
                </div>
                <HamburgerMenu isOpen={isOpen} />
            </header>
        </>
    );
}

function HamburgerMenu({ isOpen, bg_color }) {
    function closeMenu() {

    };
    if (isOpen) {
        return (
            <ul className="fixed  bg-gray-700 bg-opacity-80 top-16 right-0 px-8 lg:hidden">
                <li className='mt-5 mb-5 '>
                    <NavLink to='/search_map' className='header-nav-btn'>
                        探索地圖
                    </NavLink>
                </li>
                <li className='mb-5'>
                    <NavLink to='/nearby' className='header-nav-btn'>
                        尋找單車
                    </NavLink>
                </li>
            </ul>

        );
    } else {
        return <span></span>;
    }

}