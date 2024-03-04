import React from 'react'

// import { FaApple } from "react-icons/fa";
import iphone15promedium from "../../assets/images/hero_iphone15pro_medium_2x.jpg"
import iphone15prosmall from "../../assets/images/hero_iphone15pro_small_2x.jpg"
import iphone15medium from "../../assets/images/hero_iphone15_medium.jpg"
import iphone15small from "../../assets/images/hero_iphone15.jpg"
import applevisionmedium from "../../assets/images/hero_apple_vision_medium_2x.jpg"
import applevisionsmall from "../../assets/images/hero_apple_vision_small_2x.jpg"
import promowatchlarge from "../../assets/images/promo_apple_watch_series_9_large_2x.jpg"
import promowatchmedium from "../../assets/images/promo_apple_watch_series_9_medium_2x.jpg"
import promowatchsmall from "../../assets/images/promo_apple_watch_series_9_small_2x.jpg"
import promombklarge from "../../assets/images/promo_mbp_large_2x.jpg"
import promombkmedium from "../../assets/images/promo_mbp_medium_2x.jpg"
import promombksmall from "../../assets/images/promo_mbp_small_2x.jpg"
import promoipadlarge from "../../assets/images/promo_ipad_large_2x.jpg"
import promoipadmedium from "../../assets/images/promo_ipad_medium_2x.jpg"
import promoipadsmall from "../../assets/images/promo_ipad_small_2x.jpg"
import promoairpodlarge from "../../assets/images/promo_airpods_pro_large_2x.jpg"
import promoairpodmedium from "../../assets/images/promo_airpods_pro_medium_2x.jpg"
import promoairpodsmall from "../../assets/images/promo_airpods_pro_small_2x.jpg"

import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div>
                <div className='text-white mb-2'>
                    <div className='h-[500px] min-[734px]:h-[569px] min-[1068px]:h-[580px] min-[1370px]:h-[692px]'>
                        <div className=''>
                            <picture className='relative'>
                                <source media="(min-width:735px )" srcset={iphone15promedium} />
                                <source media="(max-width:734px )" srcset={iphone15prosmall} />
                                <img className='w-full h-[500px] min-[734px]:h-[569px] min-[1068px]:h-[580px] min-[1370px]:h-[692px]' src={iphone15promedium} alt="" />
                            </picture>
                            <div className='absolute top-20 text-center w-full cursor-pointer select-none'>
                                <div>
                                    <h2 className='text-[56px] font-semibold tracking-tight'>iPhone 15 Pro</h2>
                                    <h3 className='text-[28px] mb-2 tracking-tight'>Titanium. So Strong. So light. So Pro</h3>
                                    <span className='text-2xl text-[#2997ff]'><Link className=' hover:underline'>Learn More</Link>  &#62;</span>
                                    <span className='ms-10 text-2xl text-[#2997ff]'><Link className=' hover:underline'>Buy</Link>  &#62;</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='mb-2'>
                    <div className='h-[500px] min-[734px]:h-[569px] min-[1068px]:h-[580px] min-[1370px]:h-[692px]'>
                        <div className='relative'>
                            <picture className=''>
                                <source media="(min-width:735px )" srcset={iphone15medium} />
                                <source media="(max-width:734px )" srcset={iphone15small} />
                                <img className='w-full h-[500px] min-[734px]:h-[569px] min-[1068px]:h-[580px] min-[1370px]:h-[692px]' src={iphone15medium} alt="" />
                            </picture>
                            <div className='absolute top-16 text-center w-full cursor-pointer select-none'>
                                <div>
                                    <h2 className='text-[56px] font-semibold tracking-tight'>iPhone 15</h2>
                                    <h3 className='text-[28px] mb-2 tracking-tight'>New Camera. New Design. Newphoria</h3>
                                    <span className='text-2xl text-[#2997ff]'><Link className=' hover:underline'>Learn More</Link>  &#62;</span>
                                    <span className='ms-10 text-2xl text-[#2997ff]'><Link className=' hover:underline'>Buy</Link>  &#62;</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" mb-2">
                    <div className='h-[500px] min-[734px]:h-[569px] min-[1068px]:h-[580px] min-[1370px]:h-[692px]'>
                        <div className='relative'>
                            <picture className=''>
                                <source media="(min-width:735px )" srcset={applevisionmedium} />
                                <source media="(max-width:734px )" srcset={applevisionsmall} />
                                <img className='w-full h-[500px] min-[734px]:h-[569px] min-[1068px]:h-[580px] min-[1370px]:h-[692px]' src={iphone15promedium} alt="" />
                            </picture>
                            <div className='absolute bottom-16 text-center w-full'>
                                <div>
                                    <h2 className='text-[56px] font-semibold tracking-tight'>Apple Vision Pro</h2>
                                    <h3 className='text-[28px] mb-2 tracking-tight'>Welcome to the era of Spactial Computing.</h3>
                                    <span className='text-2xl text-[#2997ff]'><Link className=' hover:underline'>Learn More</Link>  &#62;</span>
                                    <span className='ms-10 text-2xl text-[#2997ff]'><Link className=' hover:underline'>Buy</Link>  &#62;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5 my-5 px-5'>
                    <div className='col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'>
                        <div className='relative'>
                            <picture className=''>
                                <source media="(min-width:1069px )" srcset={promowatchsmall} />
                                <source media="(min-width:735px )" srcset={promowatchmedium} />
                                <source media="(max-width:734px )" srcset={promowatchlarge} />
                                <img className='w-full h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'
                                    src={iphone15promedium} alt="" />
                            </picture>
                            <div className='absolute top-12 text-center w-full'>
                                <h2 className='text-white text-[40px] font-semibold tracking-tight mb-0'><span> Apple Watch</span></h2>
                                <p className='text-red-800 text-[12px] tracking-tight'>Seies 9</p>
                                <h3 className='text-[20px] text-[#d0d0d0] mb-2 tracking-tight'>Smatter. brighter. Mightier.</h3>
                                <span className='text-2xl text-[#2997ff]'><Link className=' hover:underline'>Learn More</Link>  &#62;</span>
                                <span className='ms-10 text-2xl text-[#2997ff]'><Link className=' hover:underline'>Buy</Link>  &#62;</span>

                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'>
                        <div className='relative'>
                            <picture className=''>
                                <source media="(min-width:1069px )" srcset={promombklarge} />
                                <source media="(min-width:735px )" srcset={promombkmedium} />
                                <source media="(max-width:734px )" srcset={promombksmall} />
                                <img className='h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'
                                    src={iphone15promedium} alt="" />
                            </picture>
                            <div className='absolute top-12 text-center w-full'>
                                <h2 className='text-[40px] font-semibold tracking-tight mb-0'><span>MacBook Pro</span></h2>
                                <h3 className='text-[20px] tracking-tight'>Mind Blowing. Head Turning.</h3>
                                <span className='text-2xl text-[#2997ff]'><Link className=' hover:underline'>Learn More</Link>  &#62;</span>
                                <span className='ms-10 text-2xl text-[#2997ff]'><Link className=' hover:underline'>Buy</Link>  &#62;</span>

                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'>
                        <div className='relative'>
                            <picture className=''>
                                <source media="(min-width:1069px )" srcset={promoipadsmall} />
                                <source media="(min-width:735px )" srcset={promoipadmedium} />
                                <source media="(max-width:734px )" srcset={promoipadlarge} />
                                <img className='w-full h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'
                                    src={iphone15promedium} alt="" />
                            </picture>
                            <div className='absolute top-12 text-center w-full'>
                                <h2 className='text-[40px] font-semibold tracking-tight mb-0'><span>iPad</span></h2>
                                <h3 className='text-[20px] mb-2 tracking-tight'>Lovable. drawable. Magical.</h3>
                                <span className='text-2xl text-[#2997ff]'><Link className=' hover:underline'>Learn More</Link>  &#62;</span>
                                <span className='ms-10 text-2xl text-[#2997ff]'><Link className=' hover:underline'>Buy</Link>  &#62;</span>

                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'>
                        <div className='relative'>
                            <picture className=''>
                                <source media="(min-width:1069px )" srcset={promoairpodsmall} />
                                <source media="(min-width:735px )" srcset={promoairpodmedium} />
                                <source media="(max-width:734px )" srcset={promoairpodlarge} />
                                <img className='w-full h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'
                                    src={iphone15promedium} alt="" />
                            </picture>
                            <div className='absolute top-12 text-center w-full'>
                                <h2 className='text-white text-[40px] font-semibold tracking-tight mb-0'><span>Airpods Pro</span></h2>
                                <h3 className='text-[20px] text-[#d0d0d0] mb-2 tracking-tight'>Addaptive Audio. Now Playing.</h3>
                                <span className='text-2xl text-[#2997ff]'><Link className=' hover:underline'>Learn More</Link>  &#62;</span>
                                <span className='ms-10 text-2xl text-[#2997ff]'><Link className=' hover:underline'>Buy</Link>  &#62;</span>

                            </div>
                        </div>
                    </div>
                    {/* <div className='col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'>
                        <div className='relative'>
                            <picture className=''>
                                <source media="(min-width:1069px )" srcset={promowatchsmall} />
                                <source media="(min-width:735px )" srcset={promowatchmedium} />
                                <source media="(max-width:734px )" srcset={promowatchlarge} />
                                <img className='w-full h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'
                                    src={iphone15promedium} alt="" />
                            </picture>
                            <div className='absolute top-12 text-center w-full'>
                                <h2 className='text-white text-[40px] font-semibold tracking-tight mb-0'><span> Apple Watch</span></h2>
                                <p className='text-red-800 text-[12px] tracking-tight'>Seies 9</p>
                                <h3 className='text-[28px] text-[#d0d0d0] mb-2 tracking-tight'>Smatter. brighter. Mightier.</h3>
                                <span className='text-2xl text-[#2997ff]'><Link className=' hover:underline'>Learn More</Link>  &#62;</span>
                                <span className='ms-10 text-2xl text-[#2997ff]'><Link className=' hover:underline'>Buy</Link>  &#62;</span>

                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 min-[734px]:col-span-1 h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'>
                        <div className='relative'>
                            <picture className=''>
                                <source media="(min-width:1069px )" srcset={promowatchsmall} />
                                <source media="(min-width:735px )" srcset={promowatchmedium} />
                                <source media="(max-width:734px )" srcset={promowatchlarge} />
                                <img className='w-full h-[500px] min-[734px]:h-[490px] min-[1068px]:h-[580px]'
                                    src={iphone15promedium} alt="" />
                            </picture>
                            <div className='absolute top-12 text-center w-full'>
                                <h2 className='text-white text-[40px] font-semibold tracking-tight mb-0'><span> Apple Watch</span></h2>
                                <p className='text-red-800 text-[12px] tracking-tight'>Seies 9</p>
                                <h3 className='text-[28px] text-[#d0d0d0] mb-2 tracking-tight'>Smatter. brighter. Mightier.</h3>
                                <span className='text-2xl text-[#2997ff]'><Link className=' hover:underline'>Learn More</Link>  &#62;</span>
                                <span className='ms-10 text-2xl text-[#2997ff]'><Link className=' hover:underline'>Buy</Link>  &#62;</span>

                            </div>
                        </div>
                    </div> */}


                </div>

            </div>

        </>
    )
}
