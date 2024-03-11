import React from "react";
import { Link, useBeforeUnload } from "react-router-dom";
import "./Watch.css";

import watchNavAcc from "../../assets/images/apppleWatch/watch_nav_accessories.svg";
import watchNavAirpods from "../../assets/images/apppleWatch/watch_nav_airpods.svg";
import watchNavbands from "../../assets/images/apppleWatch/watch_nav_bands.svg";
import watchNavComp from "../../assets/images/apppleWatch/watch_nav_compare.svg";
import watchNavFitness from "../../assets/images/apppleWatch/watch_nav_fitness.svg";
import watchNavHermes from "../../assets/images/apppleWatch/watch_nav_hermes.svg";
import watchNavNike from "../../assets/images/apppleWatch/watch_nav_nike.svg";
import watchNavSe from "../../assets/images/apppleWatch/watch_nav_se.svg";
import watchNavS8 from "../../assets/images/apppleWatch/watch_nav_series_8.svg";
import watchNavshop from "../../assets/images/apppleWatch/watch_nav_shop_watch.svg";
import watchNavStudo from "../../assets/images/apppleWatch/watch_nav_studio.svg";
import watchNavUltra from "../../assets/images/apppleWatch/watch_nav_ultra.svg";
import watchNavOS from "../../assets/images/apppleWatch/watch_nav_watch_os.svg";
import logoWatchS9 from "../../assets/images/apppleWatch/logo_watch_s9.png";
import logoWatchultra2 from "../../assets/images/apppleWatch/logo_watch_ultra_2.png";
import logoWatSE from "../../assets/images/apppleWatch/logo_watch_se.png";
import logoCarbonNeutral from "../../assets/images/apppleWatch/logo_carbon_neutral.png";
import { useBag } from "../../components/BagProvider";

export default function Watch() {
    const { addToBag } = useBag();

    const handleBuy = (name, price) => {
        const item = {
            name: name,
            price: price,
        };
        addToBag(item); // Call addToBag function to add the item to the bag
    };
    return (
        <>
            <div className="">
                <div className="chapternav pt-16 pb-6 bg-black text-[#f5f5f7] text-[12px] overflow-hidden">
                    <ul className="flex justify-center items-stretch ">
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavS8} className="w-6 object-contain mx-auto" alt="" />
                                <label>
                                    Apple Watch <br /> Series 9
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavUltra} className="w-7 object-contain mb-1 mx-auto" alt="" />
                                <label>
                                    Apple Watch <br />
                                    Ultra 2
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between ">
                                <img src={watchNavSe} className="w-6 object-contain mb-2.5 mx-auto" alt="" />
                                <label>
                                    Apple Watch <br />
                                    SE
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavNike} className="w-7 mx-auto object-contain" alt="" />
                                <label>
                                    Apple Watch <br /> Nike
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavHermes} className="w-11 object-contain mx-auto" alt="" />
                                <label>
                                    Apple Watch <br />
                                    Hermes
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavStudo} className="w-16 object-contain" alt="" />
                                <label>
                                    Apple Watch <br />
                                    Studio
                                </label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavComp} className="w-12 object-contain mx-auto" alt="" />
                                <label>Compare</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavbands} className="w-4 object-contain mx-auto" alt="" />
                                <label>Bands</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavAirpods} className="w-11 object-contain" alt="" />
                                <label>Airpods</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col items-center justify-between">
                                <img src={watchNavAcc} className="w-6 object-contain" alt="" />
                                <label>Accessories</label>
                            </div>
                        </li>
                        <li className="px-3 text-center">
                            <div className="h-20 flex flex-col items-center justify-between">
                                <img src={watchNavFitness} className="w-8 object-contain" alt="" />
                                <label>Apple Fitness+</label>
                            </div>
                        </li>
                        <li className="px-3">
                            <div className="h-20 flex flex-col items-center justify-between">
                                <img src={watchNavOS} className="w-8 object-contain" alt="" />
                                <label>WatchOS 10</label>
                            </div>
                        </li>
                        <li className="px-3">
                            <div className="h-20 flex flex-col justify-between">
                                <img src={watchNavshop} className="w-16 object-contain" alt="" />
                                <label>Shop Watch</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#1d1d1f] py-3 text-[#f5f5f7]">
                <div class="w-[92%] min-[734px]:w-[80%] mx-auto text-center text-sm">
                    <p>
                        Get 3 months of Apple Fitness+ When you buy an Apple Wathc.
                        <Link className="text-[#2997ff]">Learn more &gt;</Link>
                    </p>
                </div>
            </div>
            <div className="pt-8 mb-6 bg-black">
                <div className="pt-6 text-center text-white">
                    <img src={logoWatchS9} className="h-16 mx-auto" alt="" />
                    <h2 className="text-[48px] my-3 font-semibold tracking-tight">Smarter. Brighter. Mightier.</h2>
                    <h3 className="mb-3 text-[21px]">From $399 </h3>
                    <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => handleBuy('Apple Watch S9', 399)}
                    >
                        <Link> Buy</Link>
                    </button>
                    <p className="text-[21px]">
                        <span className="me-6">
                            <Link className="text-[#2997ff]">Learn more &gt;</Link>
                        </span>
                        <span>
                            <Link className="text-[#2997ff]">Watch a Film </Link>
                        </span>
                    </p>
                </div>
                <div className="watchS9 h-[740px]"></div>
            </div>
            <div className="pt-8 mb-6 bg-[#f5f5f7]">
                <div className="pt-6 pb-9  text-center text-black">
                    <img src={logoWatchultra2} className="h-[52px] mx-auto" alt="" />
                    <h2 className="text-[48px] my-3 font-semibold tracking-tight">Next Level Adventure.</h2>
                    <h3 className="mb-3 text-[21px]">From $799 </h3>
                    <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => handleBuy('Apple Watch Ultra 2', 799)}
                    >
                        <Link> Buy</Link>
                    </button>
                    <p className="text-[21px]">
                        <Link className="text-[#2997ff]">Learn more &gt;</Link>
                    </p>
                </div>
                <div className="watchUltra h-[628px]"></div>
            </div>
            <div className="pt-8 mb-6 h-[732px] bg-[#f5f5f7] grid grid-cols-2">
                <div className="pt-6 pb-9 flex flex-col items-center justify-center ">
                    <img src={logoWatSE} className="h-[52px] mx-auto" alt="" />
                    <h2 className="text-[48px] my-3 font-semibold tracking-tight">NA great deal to love.</h2>
                    <h3 className="mb-3 text-[21px]">From $249 </h3>
                    <p className="text-[21px]">
                        <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => handleBuy('Apple Watch SE', 249)}
                        >
                            <Link> Buy</Link>
                        </button>
                        <Link className="text-[#2997ff]">Learn more &gt;</Link>
                    </p>
                </div>
                <div className="watchSE mt-4 h-[650px]"></div>
            </div>
            <div className=" pt-8 bg-[#f5f5f7]">
                <div className="pt-6 pb-9  text-center text-black">
                    <img src={logoCarbonNeutral} className="h-[52px] mb-6 mx-auto" alt="" />
                    <h2 className="text-[48px] font-semibold tracking-tight leading-[2rem]">A first for Apple Watch</h2>
                    <h2 className="text-[48px] my-3 font-semibold tracking-tight">And Apple.</h2>

                    <p className="text-[21px]">
                        <Link className="text-[#2997ff]">Learn more &gt;</Link>
                    </p>
                </div>
                <div className="carbon-neutral h-[390px]"></div>
            </div>
            <div className=" bg-white">
                <h1 className="text-center text-[48px] tracking-thicker pt-16 pb-16 font-semibold">Which Apple Watch is right for you?</h1>
            </div>
        </>
    );
}
