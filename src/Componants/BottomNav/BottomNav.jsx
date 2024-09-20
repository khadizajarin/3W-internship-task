import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaClipboardList } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLeaderboard } from "react-icons/md";

const BottomNav = () => {
    const location = useLocation();

    const getLinkClasses = (path) => {
        return location.pathname === path 
            ? "flex flex-col items-center bg-blue-500 rounded-full border-white border-4 bottom-8 absolute"
            : "flex flex-col items-center";
    };

    return (
        <div className="fixed bottom-0 w-[375px] bg-blue-600 text-white flex justify-around items-center py-2">
            <Link to="/" >
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <FaHome className={`${getLinkClasses("/")} h-10 w-10 p-1 `}  />
                        {location.pathname === "/" && <span className="text-[9px]">Home</span>}
                    </div>
                </div>
            </Link>
            <Link to="/tasks" >
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <FaClipboardList className={`${getLinkClasses("/tasks")} h-10 w-10 p-1`} />
                        {location.pathname === "/tasks" && <span className="text-[9px]">Tasks</span>}
                    </div>
                </div>
            </Link>
            <Link to="/create-task" >
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <HiPlus className={`${getLinkClasses("/create-task")} h-10 w-10 p-1`} />
                        {location.pathname === "/create-task" && <span className="text-[9px]">Create task</span>}
                    </div>
                </div>
            </Link>
            <Link to="/manage-tasks">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <IoSettingsOutline className={`${getLinkClasses("/manage-tasks")} h-10 w-10 p-1`} />
                        {location.pathname === "/manage-tasks" && <span className="text-[9px]">Manage Tasks</span>}
                    </div>
                </div>
            </Link>
            <Link to="/leaderboard" >
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <MdOutlineLeaderboard className={`${getLinkClasses("/leaderboard")} h-10 w-10 p-1`} />
                        {location.pathname === "/leaderboard" && <span className="text-[9px]">Leader Board</span>}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BottomNav;
