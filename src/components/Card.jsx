import { useState } from "react";
import Modal from "./Modal";

const Card = ({el}) => {

  const [openModal,setOpenModal] = useState(false);
  return (
    <div>
      <div 
        className="w-full h-[60px] md:h-[100px] rounded-md mt-10 flex flex-col gap-y-1 p-2 md:p-4 bg-orange-400 cursor-pointer"
        onClick={(e) => setOpenModal(true)}>
        <p className="capitalize">{el.title}</p>
        <p className="font-bold">Due Date: <span className="font-normal">{el.dueDate}</span></p>
      </div>
      {openModal && <Modal  openModal={openModal} setOpenModal={setOpenModal} el={el}/>}
    </div>
  )
}

export default Card
