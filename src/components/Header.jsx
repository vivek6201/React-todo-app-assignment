import add from "../assets/add.png"
import search from "../assets/search.png"
import user from "../assets/user.png"
import {FiChevronDown} from "react-icons/fi"
import { useState } from "react"
import Modal from "./Modal"

function Header() {
  const createTodo = () =>{
    setOpenModal(true);
    setCreateTask(true);
  }

  const [openModal,setOpenModal] = useState(false);
  const [createTask,setCreateTask] = useState(false)

  return (
    <div className="flex items-center h-full px-2 md:px-5 bg-navbar justify-between">
      <div className="flex gap-x-5 h-[50%] items-center">
        <button 
          className="flex gap-x-2 rounded-full text-sm md:text-base px-2 md:px-5 py-1 md:py-2 text-white items-center bg-button"
          onClick={createTodo}>
          <img src={add} alt="" className="w-[10px] md:w-[1rem]"/>
          <p>Create Task</p>
        </button>
        <div className="bg-black w-[2px] h-full hidden md:block"></div>
        <div className="lg:flex rounded-md overflow-hidden hidden">
          <input type="search" placeholder="Search your query" className="italic outline-none px-5"/>
          <button className="bg-button p-2 text-center">
            <img src={search} alt="" className="w-10/12"/>
          </button>
        </div>
      </div>
      <div className="flex h-[50%] items-center">
        <div className="text-sm hidden md:block md:text-base bg-white font-bold px-2 md:px-5 py-2 rounded-md">
          <p>Vivek Kumar Gupta | React Developer</p>
        </div>
        <img src={user} alt="" className="w-12 md:w-16 aspect-square rounded-full -translate-x-2 md:-translate-x-4"/>
        <FiChevronDown className="text-white text-xl bg-button w-8 cursor-pointer"/>
      </div>

      {openModal && <Modal createTask={createTask} openModal={openModal} setOpenModal={setOpenModal}/>}
    </div>
  )
}

export default Header
