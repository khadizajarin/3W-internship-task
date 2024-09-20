import facebook from "./../../assets/facebook.png";
import instagram from "./../../assets/instagram.jpg";
import X from "./../../assets/x.png";
import Youtube from "./../../assets/youtube.png";
import LinkedIn from "./../../assets/linkedin.png";
import Telegram from "./../../assets/telegram.png";


const SocialMedia = () => {
  const platforms = [
    { name: 'Instagram', icon: instagram, points: 300 },
    { name: 'Facebook', icon: facebook, points: 225 },
    { name: 'X', icon: X, points: 85 },
    { name: 'Youtube', icon: Youtube, points: 130 },
    { name: 'Telegram', icon: Telegram, points: 60 },
    { name: 'LinkedIn', icon: LinkedIn, points: 30 },
  ];

  return (
    <div className=" m-4">
        <div className="flex flex-col mt-6 rounded-md">
            <h1 className="text-xl font-semibold mb-3 text-left">Social Media Task</h1>
            <div className="grid grid-cols-3 gap-4 px-4 py-4 shadow-black shadow-[0px_0px_2px_0_rgba(0,0,0,0.1)] rounded-md">
                {platforms.map((platform) => (
                <div key={platform.name} className="flex flex-col items-center bg-white rounded-md shadow-gray-300 shadow-[0px_0px_5px_0_rgba(0,0,0,0.1)] p-2 relative">
                    <img src={platform.icon} alt={platform.name} className="h-7 w-7 mb-1 rounded-md " />
                    <p className="text-[12px] font-medium">{platform.name}</p>
                    <div className="absolute -top-2 -right-2 bg-green-700 text-white rounded-full px-1 py-1 text-xs">
                    +{platform.points}
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default SocialMedia;
