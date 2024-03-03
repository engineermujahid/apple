import React from 'react'
import iphone15prolarge from "../../assets/images/hero_iphone15pro_large_2x.jpg"
import iphone15promedium from "../../assets/images/hero_iphone15pro_medium_2x.jpg"
import iphone15prosmall from "../../assets/images/hero_iphone15pro_small_2x.jpg"

export default function Home() {
    return (
        <>
            <div id='hero' className='h-[692px]'>
                <div id='bgimage'>
                    <div id='imgCard'>
                        <picture className='h-[692px]'>
                            {/* <source media="(min-width:1069px )" srcset={iphone15prolarge} /> */}
                            <source media="(min-width:735px )" srcset={iphone15promedium} />
                            <source media="(max-width:734px )" srcset={iphone15prosmall} />
                            <img src={iphone15promedium} alt="" />
                        </picture>
                    </div>
                </div>

            </div>

            <div className='bg-[#d9d9d9] h-screen'>
                hero
            </div>
        </>
    )
}
