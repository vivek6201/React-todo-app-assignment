import sidebarLogo from "../assets/sidebarLogo.png"
import {AiFillHome} from "react-icons/ai"

const Sidebar = () => {
  return (
    <div className="bg-sidebar flex flex-col items-center h-screen">
      <img src={sidebarLogo} alt="" className="w-[45px] aspect-square my-8"/>

      <div className="bg-[#CC8E51] w-full aspect-square flex justify-center items-center flex-col gap-y-2 text-white cursor-pointer">
        <AiFillHome color="white" className="text-[20px] md:text-[40px]"/>
        <p className="opacity-60 text-sm md:text-base">HOME</p>
      </div>
      <div className=" w-full aspect-square flex justify-center items-center flex-col gap-y-2 text-white cursor-pointer">
        <AiFillHome color="white" className="text-[20px] md:text-[40px]"/>
        <p className="opacity-60 text-sm md:text-base">HOME</p>
      </div>
      <div className=" w-full aspect-square flex justify-center items-center flex-col gap-y-2 text-white cursor-pointer">
        <AiFillHome color="white" className="text-[20px] md:text-[40px]"/>
        <p className="opacity-60 text-sm md:text-base">HOME</p>
      </div>
      <div className=" w-full aspect-square flex justify-center items-center flex-col gap-y-2 text-white cursor-pointer">
        <AiFillHome color="white" className="text-[20px] md:text-[40px]"/>
        <p className="opacity-60 text-sm md:text-base">HOME</p>
      </div>
      <div className="w-full aspect-square flex justify-center items-center flex-col gap-y-2 text-white cursor-pointer">
        <AiFillHome color="white" className="text-[20px] md:text-[40px]"/>
        <p className="opacity-60 text-sm md:text-base">HOME</p>
      </div>
    </div>
  )
}

export default Sidebar
