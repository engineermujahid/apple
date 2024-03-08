import React from 'react';
import iphone15promedium from "../../assets/images/hero_iphone15pro_medium_2x.jpg";
import iphoneimg2 from '../../images/iPhone2ndImg.png'

export default function Iphone() {
    return (
        <>
            <h1 className='font-normal text-xl text-center pt-24 mx-[35rem]'>Get $180–$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher. <span className='text-blue-500 hover:underline hover:cursor-pointer'>Shop iPhone &gt;</span></h1>

            <div className="w-full h-screen mt-8 relative" style={{ backgroundImage: `url("${iphone15promedium}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute top-10 left-0 right-0 text-center pt-8'>
                    <h2 className="text-sm font-normal m-4 text-orange-500">New</h2>
                    <h3 className="text-2xl font-medium m-4 text-stone-200">iPhone 15 Pro</h3>
                    <h3 className="text-6xl font-semibold m-4 text-stone-500">Titanium</h3>
                    <h3 className="text-2xl font-light mt-4 text-white">From $999 or $41.62/mo. for 24 mo.</h3>
                    <div className='inline-block mt-4'>
                        <h4 className='text-white bg-blue-600 hover:bg-blue-500 hover:cursor-pointer py-2 px-4 rounded-3xl inline-block'>Buy</h4>
                    </div>
                    <h4 className='text-blue-500 mt-4 font-light text-xl hover:underline hover:cursor-pointer'>Learn more &gt;</h4>
                </div>
            </div>

            <div className="w-full h-screen relative" style={{ backgroundImage: `url("${iphoneimg2}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute top-10 left-0 right-0 text-center pt-8'>
                    <h2 className="text-sm font-normal m-4 text-orange-500">New</h2>
                    <h3 className="text-2xl font-medium m-4">iPhone 15</h3>
                    <h3 className="text-6xl font-semibold m-4">Newphoria</h3>
                    <h3 className="text-2xl font-light mt-4">From $799 or $33.29/mo. for 24 mo.</h3>
                    <div className='inline-block mt-4'>
                        <h4 className='text-white bg-blue-600 hover:bg-blue-500 hover:cursor-pointer py-2 px-4 rounded-3xl inline-block'>Buy</h4>
                    </div>
                    <h4 className='text-blue-500 mt-4 font-light text-xl hover:underline hover:cursor-pointer'>Learn more &gt;</h4>
                </div>
            </div>
        </>
    );
}
