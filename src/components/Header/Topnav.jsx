import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { IoSearchSharp } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { useBag } from '../BagProvider';

import { v4 as uuidv4 } from 'uuid';

export default function Topnav() {
    const [nav, setNav] = useState(true)
    const [showBagDropdown, setShowBagDropdown] = useState(false);
    const { bagItems } = useBag();
    const { clearBag } = useBag();

    const toggleMenu = () => {
        if (window.innerWidth < 840) {
            const navLinks = document.querySelector("#navLinks")
            nav ?
                navLinks.style = "display:block"
                :
                navLinks.style = "display:hidden"
            setNav(!nav)
        }
    }

    const handleBagClick = () => {
        setShowBagDropdown(!showBagDropdown);
    };

    return (
        <>
            <header className='text-[#d0d0d0] h-14 fixed w-full top-0 z-50'>
                <nav className='mx-auto w-full max-w-[1024px] flex items-center justify-between py-2'>
                    <div className='px-2 text-2xl' >
                        <span className='cursor-pointer'>
                            <Link to="/">
                                <FaApple />
                            </Link>
                        </span>
                    </div>
                    <div id='navLinks' className='absolute top-0 hidden min-[840px]:block min-[840px]:static w-full min-[840px]:w-auto' >
                        <ul className='flex flex-col min-[840px]:flex-row max-[840px]:bg-[#161617] text-white pb-12 min-[840px]:pb-0  min-[840px]:text-[#d0d0d0]'>
                            <li onClick={toggleMenu} className='text-2xl min-[840px]:hidden ms-auto px-3 py-2'><IoIosClose /></li>
                            <li onClick={toggleMenu} className='text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1'><Link to="store">Store</Link></li>
                            <li onClick={toggleMenu} className='text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1'><Link to="mac">Mac</Link></li>
                            <li onClick={toggleMenu} className='text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1'><Link to="ipad">Ipad</Link></li>
                            <li onClick={toggleMenu} className='text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1'><Link to="iphone">Iphone</Link></li>
                            <li onClick={toggleMenu} className='text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1'><Link to="watch">Watch</Link></li>
                            {/* <li onClick={toggleMenu} className='text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1'><Link to="accessories">Accessories</Link></li>
                            <li onClick={toggleMenu} className='text-2xl font-bold min-[840px]:font-normal min-[840px]:text-sm px-12 min-[840px]:px-3 py-1'><Link to="support">Support</Link></li> */}
                        </ul >
                    </div >
                    <div className='flex gap-2 me-3'>
                        {/* <button type="button" className="text-xl px-3 py-2 hover:font-bold delay-100">
                            <IoSearchSharp />
                        </button> */}
                        <button type="button" className="text-lg px-4 py-1 hover:bg-neutral-200 duration-500 hover:text-black  border-gray-800 border-2 rounded-full">
                            <Link to="login">Login</Link>
                        </button>
                        <button type="button" className="text-xl px-3 py-2 delay-100" onClick={handleBagClick}>
                            <BsBag />
                            {/* Dropdown for bag items */}
                            {showBagDropdown && (
                                <div className="fixed top-0 left-0 w-full h-1/2 bg-black bg-opacity-50 z-50 flex flex-col justify-center items-center py-5">
                                    <h1 className='text-4xl text-semibold text-black m-5 bg-red'>Bag</h1>
                                    <div className="bg-white rounded-lg p-4 max-w-[80vw] max-h-[80vh] overflow-y-auto text-black w-full">

                                        {bagItems.length > 0 ? (
                                            bagItems.map((item, index) => {
                                                return (
                                                    <>

                                                        <div className='flex hover:font-bold justify-between'>
                                                            <div className='m-5' key={Math.random()}>{item.name}</div>
                                                            <div className='m-5' key={Math.random()}>{item.price}</div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        ) : (
                                            <div>No items in the bag</div>
                                        )}
                                    </div>
                                    <button className='text-3xl text-red-500 text-center m-5' onClick={clearBag}>
                                        Clear
                                    </button>
                                </div>
                            )}
                        </button>
                        <button className='text-xl block min-[840px]:hidden' onClick={toggleMenu}>
                            <AiOutlineMenu />
                        </button>

                    </div>
                </nav >
            </header >
        </>
    )
}
