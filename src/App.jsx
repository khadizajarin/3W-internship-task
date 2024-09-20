
import './App.css'
import BottomNav from './Componants/BottomNav/BottomNav';
import { Outlet } from "react-router-dom";
// import Navbar from './Componants/Home/Navbar'
 

function App() {

  return (
    <div className=" flex justify-center bg-white">
      
      <div className="relative w-[375px] min-h-screen bg-gray-100">
        <div className="pb-16">

          <Outlet></Outlet>
        </div>
        <BottomNav />
      </div>
    </div>
  )
}

export default App
