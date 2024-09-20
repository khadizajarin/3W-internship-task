/* eslint-disable react/prop-types */

const Badge = ({ text, color, borderColor, icon }) => {
    return (
      <div className={`inline-flex items-center justify-center px-1 py-1 rounded-full border-[0.1rem] ${borderColor} ${color} font-semibold text-xs mx-1`}>
        {icon && <span className="mr-1">{icon}</span>}
        {text}
      </div>
    );
  };
const Navbar = ({name}) => {
    return (
        <div className="navbar bg-base-100 px-[1rem]">
        <div className="flex-1">
            <a className=" font-semibold">{name}</a>
        </div>
        <div className="flex-none gap-2">
            {/* stat */}
            <div className="flex items-center justify-center">
            <Badge 
                text="3982" 
                color="text-red-600" 
                borderColor="border-gray-200" 
                icon={<span role="img" aria-label="gift">🎁</span>} 
            />
            <Badge className='bg-green-300'
                text="₹2875.00" 
                color="text-green-600" 
                borderColor="border-gray-200" 
            />
            <Badge 
                text="₹1000" 
                color="text-gray-600" 
            borderColor="border-gray-200" 
            />
        </div>
    

    {/* profile */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;