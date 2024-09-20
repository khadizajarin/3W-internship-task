

import { ImYoutube } from "react-icons/im";
import { IoCopyOutline,IoLogoWhatsapp ,IoDiamondOutline } from "react-icons/io5";
import { IoLogoFacebook,IoIosPeople } from "react-icons/io";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Share = () => {
    
    return (
        <div>
            {/* Refer link */}
            <div className=" mx-4 my-2">
                <div className="flex flex-col mt-6  shadow-gray-300 shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)]">
                    <h1 className="text-sm font-semibold  mt-2 text-center">Share Your Refer Link</h1>
                    <div className="grid grid-cols-4 gap-3 px-3 py-3 rounded-md">
                        <div  className="flex flex-col items-center bg-white ">
                            <IoCopyOutline className="border-gray-300 border-2 rounded-full h-11 w-11 p-[10px] text-blue-600 bg-blue-200" />
                            <p className="text-[10px] font-medium">Copy Link</p>
                        </div>
                        <div  className="flex flex-col items-center bg-white">
                            <IoLogoWhatsapp className="border-gray-300 border-2 rounded-full h-11 w-11 p-[10px] text-green-600 bg-green-200" />
                            <p className="text-[10px] font-medium">Whatsapp</p>
                        </div>
                        <div  className="flex flex-col items-center bg-white">
                            <IoLogoFacebook className="border-gray-300 border-2 rounded-full h-11 w-11 p-[10px] text-blue-700 bg-blue-200" />
                            <p className="text-[10px] font-medium">Facebook</p>
                        </div>
                        <div  className="flex flex-col items-center bg-white">
                            <PiTelegramLogoLight className="border-gray-300 border-2 rounded-full h-11 w-11 p-[10px] text-cyan-800 bg-blue-200" />
                            <p className=" text-[10px] font-medium">Telegram</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Membership & Leads */}
            <div className="flex flex-col">
                    <div className="grid grid-cols-2 gap-1 px-3 py-3 rounded-md">
                        <div  className="flex flex-col items-center p-3 bg-white shadow-gray-300 shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)]">
                           <IoDiamondOutline className=" h-6 w-6 text-blue-600"/>
                            <p className="text-[9px] font-medium">Premium Membership</p>
                        </div>
                        <div  className="flex flex-col items-center p-3 bg-white shadow-gray-300 shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)]">
                            <IoIosPeople className=" h-6 w-6 text-blue-600"/>
                            <p className="text-[9px] font-medium">My Leads</p>
                        </div>
                    </div>
                </div>

            {/* connect with us */}
            <div className="mx-4 my-2">
                <div className="flex flex-col shadow-gray-300 shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)]">
                    <h1 className="text-sm font-semibold mt-2 text-center">Connect With Us</h1>
                    <div className="grid grid-cols-6 gap-1 px-3 py-3 rounded-md">
                    <div className="flex justify-center items-center">
                        <IoLogoWhatsapp className="text-purple-950 h-6 w-6" />
                    </div>
                    <div className="flex justify-center items-center">
                        <PiTelegramLogoLight className="text-cyan-800 h-6 w-6" />
                    </div>
                    <div className="flex justify-center items-center">
                        <ImYoutube className="text-red-700 h-6 w-6" />
                    </div>
                    <div className="flex justify-center items-center">
                        <FaSquareXTwitter className="text-black h-6 w-6" />
                    </div>
                    <div className="flex justify-center items-center">
                        <BsInstagram className="text-purple-700 h-6 w-6" />
                    </div>
                    <div className="flex justify-center items-center">
                        <IoLogoFacebook className="text-blue-950 h-6 w-6 p-0" />
                    </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Share;