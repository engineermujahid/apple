import React from 'react'
import iphone15promedium from "../../assets/images/hero_iphone15pro_medium_2x.jpg"
import iphone15prosmall from "../../assets/images/hero_iphone15pro_small_2x.jpg"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='text-white'>
                <div className='h-[500px] min-[734px]:h-[569px] min-[1068px]:h-[580px] min-[1370px]:h-[692px]'>
                    <div className=''>
                        <picture className=''>
                            <source media="(min-width:735px )" srcset={iphone15promedium} />
                            <source media="(max-width:734px )" srcset={iphone15prosmall} />
                            <img className='w-full h-[500px] min-[734px]:h-[569px] min-[1068px]:h-[580px] min-[1370px]:h-[692px]' src={iphone15promedium} alt="" />
                        </picture>
                    </div>
                    <div className='absolute top-20 text-center w-full'>
                        <div>
                            <h2 className='text-[52px] font-semibold'>iPhone 15 Pro</h2>
                            <h3 className='text-[28px] mb-2'>Titanium. So Strong. So Light. So Pro</h3>
                            <span className='text-2xl text-[#2997ff]'><Link className=' hover:underline'>Learn More</Link>  &#62;</span>
                            <span className='ms-10 text-2xl text-[#2997ff]'><Link className=' hover:underline'>Buy</Link>  &#62;</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-[#d9d9d9] h-screen'>
                hero
            </div>
        </>
    )
}
