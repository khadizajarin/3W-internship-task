import { IoWallet } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const Stat = () => {
    return (
        <div className="py-2 px-1 flex flex-row gap-2 justify-around items-center">
            <div className=" border-gray-400 border-2 rounded-lg px-2 py-2 w-1/3">
                <div className="text-gray-600 text-xs">Wallet</div>
                <div className="flex gap-7 text-sm text-green-900"><span>₹2875.00</span> <span className=" text-base"><IoWallet /></span> </div>   
            </div>

            <div className="border-gray-400 border-2 rounded-lg px-2 py-2 w-1/3">
                <div className="text-gray-600 text-xs">Earnings</div>
                <div className="flex gap-6 text-sm text-blue-700"><span>₹2875.00</span><span className=" text-base"><FaDollarSign /></span> </div>
            </div>

            <div className="border-gray-400 border-2 rounded-lg px-2 py-2 w-1/3">
                <div className="text-gray-600 text-xs">Referrals</div>
                <div className="flex gap-10 text-sm text-yellow-500"><span>2417</span> <span className=" text-base"><IoMdShare /></span> </div>
            </div>
        </div>
    );
};

export default Stat;