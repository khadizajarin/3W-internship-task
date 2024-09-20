import Navbar from "./Navbar";
import { GrAnnounce } from "react-icons/gr";
import Stat from "./Stat";
import Slider from "./Slider"
import SocialMedia from "./SocialMedia";
import SocialSlider from "./SocialSlider";
import Share from "./Share";


const Home = () => {
    return (
        <div>
            <Navbar name={`Home`}></Navbar>
            <div className="bg-[#FFA300] text-white px-2 py-1 flex items-center">
                <span className="mr-2 text-[1.3rem] text-black"><GrAnnounce /></span>
                <marquee className='font-semibold mr-2 '>Taskplanet. Get 10 Points on every referral.</marquee>
            </div>
            <Stat></Stat>
            <Slider></Slider>
            <SocialMedia></SocialMedia>
            <SocialSlider></SocialSlider>
            <Share></Share>
            
        </div>
    );
};

export default Home;