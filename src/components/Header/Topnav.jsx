import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { IoSearchSharp } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

export default function Topnav() {
    const [nav, setNav] = useState(true)

    const toggleMenu = () => {
        if (window.innerWidth < 840) {
            const navLinks = document.querySelector("#navLinks")
            const toggle = document.querySelector("#navLinks")
            nav ?
                navLinks.style = "display:block"
                :
                navLinks.style = "display:hidden"
            setNav(!nav)
        }
    }

    return (
        <>
            <header className='bg-[#121212] text-[#d0d0d0]'>
                <nav className='py-2 mx-auto w-full max-w-[1024px] flex items-center justify-between'>
                    <div className='px-2 text-2xl' >
                        <span className='cursor-pointer'>
                            <FaApple />
                        </span>
                    </div>
                    <div id='navLinks' className='absolute top-0 hidden min-[840px]:block min-[840px]:static w-full min-[840px]:w-auto' >
                        <ul className='flex flex-col min-[840px]:flex-row bg-[#121212] text-[#d0d0d0]'>
                            <li onClick={toggleMenu} className='text-2xl min-[840px]:hidden ms-auto px-3 py-2'><IoIosClose /></li>
                            <li onClick={toggleMenu} className='text-sm px-3 py-2'><Link to="/">Home</Link></li>
                            <li onClick={toggleMenu} className='text-sm px-3 py-2'><Link to="store">Store</Link></li>
                            <li onClick={toggleMenu} className='text-sm px-3 py-2'><Link to="mac">Mac</Link></li>
                            <li onClick={toggleMenu} className='text-sm px-3 py-2'><Link to="ipad">Ipad</Link></li>
                            <li onClick={toggleMenu} className='text-sm px-3 py-2'><Link to="iphone">Iphone</Link></li>
                            <li onClick={toggleMenu} className='text-sm px-3 py-2'><Link to="watch">Watch</Link></li>
                            <li onClick={toggleMenu} className='text-sm px-3 py-2'><Link to="accessories">Accessories</Link></li>
                            <li onClick={toggleMenu} className='text-sm px-3 py-2'><Link to="support">Support</Link></li>
                        </ul >
                    </div >
                    <div className='flex gap-2 me-3'>
                        <button type="button" class="text-xl px-3 py-2 hover:font-bold delay-100">
                            <IoSearchSharp />
                        </button>
                        <button type="button" class="text-xl px-3 py-2 hover:font-bold delay-100">
                            <BsBag />
                        </button>
                        <button className='text-2xl block min-[840px]:hidden' onClick={toggleMenu}>
                            <AiOutlineMenu />
                        </button>

                    </div>
                </nav >
            </header >
        </>
    )
}
