import React, { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Store() {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    };

    const scrollRight = () => {
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    };

    return (
        <div className='pt-40 bg-neutral-100'>
            {/* top */}
            <div className='flex items-center'>
                <div className="flex flex-col flex-grow break-words mx-12 pl-24 pr-96 text-left">
                    <h1 className="flex text-5xl font-medium">Store. <p className="text-5xl font-medium text-gray-500">&nbsp;The best way to buy</p></h1>
                    <p className="text-5xl font-medium text-gray-500"><span className="block">products you love.</span></p>
                </div>

                <div className='flex flex-col justify-center mx-44'>
                    <div className='flex items-center'>
                        <img className='h-[40px] w-[40px] rounded-full m-2' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                        <div className='flex flex-col justify-center font-normal'>
                            <h1 className='font-bold'>Need shopping help?</h1>
                            <h1 className='text-blue-500 hover:underline hover:cursor-pointer'>Ask a Specialist</h1>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className='h-[40px] w-[40px] rounded-full m-2' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                        <div className='flex flex-col justify-center font-normal'>
                            <h1 className='font-bold'>Visit an Apple Store</h1>
                            <h1 className='text-blue-500 hover:underline hover:cursor-pointer'>Find one near you</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* row of pics */}
            <div className='flex mt-32 mx-32'>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Mac</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Iphone</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Ipad</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Apple Watch</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Apple Vision Pro</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Airpods</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Airtag</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Apple TV 4K</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Home Pod</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Accesseories</h1>
                </div>
                <div className='flex flex-col'>
                    <img className='w-[120px] h-[78px] mx-5' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h1 className='text-center font-medium mt-2 hover:underline hover:cursor-pointer'>Apple Gift Card</h1>
                </div>
            </div>

            {/* 
            <div className="flex relative mt-10 mx-12 pl-24 overflow-x-auto" ref={carouselRef}>
                <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                    <div className="">
                        <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                        <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                        <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                    </div>
                    <div className="flex-1"></div>
                    <div className="mt-auto mb-5">
                        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-full h-auto object-cover" />
                    </div>
                </div>
                <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                    <div className="">
                        <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                        <h3 className="text-2xl font-bold m-3">Titanium</h3>
                        <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                    </div>
                    <div className="flex-1"></div>
                    <div className="mt-auto mb-5">
                        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                    </div>
                </div>

                <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full" onClick={scrollLeft}>
                    <IoIosArrowBack />
                </button>
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full" onClick={scrollRight}>
                    <IoIosArrowForward />
                </button>
            </div> */}

            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">The latest.<p className="text-3xl font-medium text-gray-500">&nbsp;Take a look at what’s new, right now.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    direction="horizontal"
                >
                    {/* Slides */}
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* help is here */}
            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">Help is here.<p className="text-3xl font-medium text-gray-500">&nbsp;Whenever and however you need it.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    direction="horizontal"
                >
                    {/* Slides */}
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* The apple store diffrence */}
            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">The Apple Store difference.<p className="text-3xl font-medium text-gray-500">&nbsp;Even more reasons to shop with us.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={3}
                    slidesPerView={5}
                    direction="horizontal"
                >
                    {/* Slides */}
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* Accessories. */}

            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">Accessories.<p className="text-3xl font-medium text-gray-500">&nbsp;Essentials that pair perfectly with your favorite devices.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    direction="horizontal"

                >
                    {/* Slides */}
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* loud and clear*/}

            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">Loud and clear.<p className="text-3xl font-medium text-gray-500">&nbsp;Unparalleled choices for rich, high-quality sound.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    direction="horizontal"

                >
                    {/* Slides */}
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* The Apple experience
             */}
            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">The Apple experience.<p className="text-3xl font-medium text-gray-500">&nbsp;Do even more with Apple products and services.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    direction="horizontal"
                >
                    {/* Slides */}
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[480px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* special savings */}

            <h1 className="flex text-3xl font-medium mt-24 mx-12 pl-24">Special savings.<p className="text-3xl font-medium text-gray-500">&nbsp;iPhone carrier deals and exclusive savings for school, businesses, and more.</p></h1>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    direction="horizontal"

                >
                    {/* Slides */}
                    <SwiperSlide style={{ marginRight: '90px' }}>
                        {/* Card content */}
                        <div className="w-[400px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col overflow-hidden">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* Card content */}
                        <div className="w-[320px] h-[500px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col">
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">IPHONE 15 PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Titanium</h3>
                                <p className="text-gray-600 m-3">From $999 or 41.62/mo. for 24mo.</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="mt-auto mb-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 2" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

        </div >
    );
}
