/* eslint-disable react/prop-types */
import instagram from "./../assets/instagram.jpg";
import Navbar from './Home/Navbar';



const Box = ({text}) => {

    return (
        <div className="bg-white m-4">
            <div className="bg-red-500 text-white rounded-lg p-2 flex flex-col items-center ">
                <div className="flex flex-row justify-start items-center w-full gap-2">
                    <img src={instagram} alt="Instagram" 
                        className="w-8 h-8 bg-white rounded-md p-1"
                    />
                    <span className="font-semibold text-base">{text}</span>
                    <span role="img" aria-label="Trophy">🏆</span>
                    </div>
                <div className="mt-2 bg-white text-red-500  py-1 px-4 rounded-lg">
                10 Points
                </div>
            </div>
        </div>
    );

};


const Task = () => {
    return (
        <div className='bg-white'>
            <Navbar name={`Task Details`}></Navbar>
            
            <Box text={`Monthly leaderboard winner`}></Box>
            <Box text={`Share with 5 friends!`}></Box>
            <Box text={`Earn Daily win Big Reward!`}></Box>
            <Box text={`Claim 10 points every hour`}></Box>
            <Box text={`Weekly Leaderboard Prize`}></Box>
            <Box text={`Monthly leaderboard winner`}></Box>
            <Box text={`Share with 5 friends!`}></Box>
            <Box text={`Claim 10 points every hour`}></Box>
        </div>  
    );
};

export default Task;