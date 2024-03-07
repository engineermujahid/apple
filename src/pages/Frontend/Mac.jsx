import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Mac() {
    return (
        <div className='pt-40 bg-neutral-100'>
            {/* top */}
            <div className='flex items-center'>
                <div className="flex flex-col flex-grow break-words mx-12 pl-24 pr-96 text-left">
                    <h1 className="flex text-7xl font-medium">Mac</h1>
                </div>

                <div className='flex flex-col justify-center mx-44'>
                    <div className='flex items-center'>
                        <div className='flex flex-col justify-center'>
                            <h1 className='font-medium text-3xl'>If you can dream it,<br /> Mac can do it.</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video section */}
            <div id="video-container" className="max-w-full mx-auto mt-8 p-10">
                <video id="scrolling-video" className="w-full h-screen rounded-2xl object-cover" autoPlay muted loop>
                    <source src="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <h1 className="flex text-5xl font-medium mt-44 mx-12 pl-24">Get to know Mac.</h1>

            <div className='mt-10 mx-8 pl-24'>
                <Swiper
                    spaceBetween={-20}
                    slidesPerView={4}
                    direction="horizontal"
                >
                    {/* Slides */}
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://www.apple.com/v/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_xlarge_2x.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-sm font-medium m-3 text-white">GETTING STARTED</h2>
                                <h3 className="text-2xl font-semibold m-3 text-white">Easy to use. Easy to love.</h3>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge_2x.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-sm font-medium m-3 text-white">PERFORMANCE AND BATTERY LIFE</h2>
                                <h3 className="text-2xl font-semibold m-3 text-white">Go fast. Go far.</h3>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://www.apple.com/v/mac/home/by/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge_2x.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-sm font-medium m-3">Mac and iPhone</h2>
                                <h3 className="text-2xl font-semibold m-3">Dream team.</h3>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://www.apple.com/v/mac/home/by/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge_2x.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-sm font-medium m-3">COMPATIBILITY</h2>
                                <h3 className="text-2xl font-semibold m-3">Mac runs your <br /> favourite apps.</h3>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-sm font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-sm font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[372px] h-[680px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col overflow-hidden relative" style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div>
                                <h2 className="text-sm font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>
                                <p className="text-gray-600 m-3">From $3499 or 291.58/mo. for 12mo.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>

            {/* explore the lineup------------------------------------------------------------------------------------ */}
            <div className='flex items-center mt-80'>
                <div className="flex flex-col flex-grow break-words mx-12 pl-24 pr-96 text-left">
                    <h1 className="flex text-7xl font-medium">Explore the lineup.</h1>
                </div>

                <div className='flex flex-col justify-center mx-44 '>
                    <div className='flex items-center'>
                        <div className='flex flex-col justify-center'>
                            <h1 className='font-medium text-lg justify-center text-blue-600 hover:cursor-pointer hover:underline'>Compare all models. &gt;</h1>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='text-5xl text-center mt-10'>Add products here</h1>

            {/* Why Apple is the best place to buy Mac--------------------------- */}
            <div className='flex items-center mt-80'>
                <div className="flex flex-col flex-grow break-words mx-12 pl-24 pr-96 text-left">
                    <h1 className="flex text-6xl font-medium">Why Apple is the best
                        <br />place to buy Mac.</h1>
                </div>

                <div className='flex flex-col justify-center mx-44 '>
                    <div className='flex items-center'>
                        <div className='flex flex-col justify-center'>
                            <h1 className='font-medium text-lg justify-center text-blue-600 hover:cursor-pointer hover:underline'>Shop Mac &gt;</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5 mx-8 pl-24'>
                <Swiper
                    spaceBetween={-200}
                    slidesPerView={4}
                    direction="horizontal"
                >
                    {/* Slides */}
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-5 pb-5'>
                        {/* Card content */}
                        <div className="w-[320px] h-[240px] mx-3 rounded-3xl bg-white shadow-md p-4 transition-transform duration-700 transform hover:scale-105 flex flex-col">
                            <div className="m-3 mt-5">
                                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Title 1" className="w-[50px] h-[50px] object-cover rounded-lg" />
                            </div>
                            <div className="">
                                <h2 className="text-md font-medium m-3 text-gray-500">APPLE VISION PRO</h2>
                                <h3 className="text-2xl font-bold m-3">Welcome to spatial computing</h3>

                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides as needed */}
                </Swiper>
            </div>


        </div >


    );
}
