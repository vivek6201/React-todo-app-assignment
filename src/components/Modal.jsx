import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../Redux/Slices/TodoSlice";
import { v4 as uuidv4 } from 'uuid';

const Modal = ({setOpenModal,createTask=false,el=null}) => {
  const dispatch = useDispatch();
  
  const [taskData, setTaskData] = useState({
    title: el ? el.title : "",
    status: el ? el.status : "",
    dueDate: el ? el.dueDate : "",
  });

  const handleDelete =() =>{
    dispatch(removeTodo(el.id));
    setOpenModal(false);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTaskData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if(taskData.title && taskData.status ){
      dispatch(addTodo({
        id:uuidv4(),
        ...taskData
      }));
      setOpenModal(false);
    }
  };

  const handleUpdate = () =>{
    const {title,status,dueDate} = taskData
    dispatch(updateTodo({
      ...el,
      title,
      status,
      dueDate
    }));
    setOpenModal(false);
  }

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-[2px] bg-opacity-30 flex justify-center items-center z-[999]">
      <div className="bg-white flex flex-col justify-around w-[300px] md:w-[500px] h-[600px] rounded-md p-10 gap-y-5">
        <h2 className="text-xl font-bold">{createTask ? "Create a Task for the team" : "Edit task for the Team"}</h2>
        <div className="bg-black w-full h-[1px]"></div>
        <label>
          <p>Add task description</p>
          <textarea
            className="bg-box w-full h-[5rem] px-4 py-2 rounded-md my-2 outline-none"
            placeholder="feed the task guidelines and information"
            value={taskData.title}
            name="title"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <div className="w-full">
          <p>Select Task Status</p>
          <select
            className="bg-box rounded-md px-4 py-2 outline-none w-full mt-2"
            value={taskData.status}
            name="status"
            onChange={handleChange}
          >
            <option value="Select Todo State">Select todo state</option>
            <option value="to do">To do</option>
            <option value="in progress">In Progress</option>
            <option value="task done">Task Done</option>
          </select>
        </div>

        <div className="w-full">
          <p>Due Date</p>
          <input
            type="date"
            className="bg-box px-5 py-2 text-black opacity-50 w-10/12 md:w-[50%] mt-2"
            value={taskData.dueDate}
            onChange={handleChange}
            name="dueDate"
          />
        </div>

        {createTask ? (
          <div className="flex gap-2 flex-wrap">
            <button
              className="px-5 py-2 rounded bg-button text-white"
              onClick={handleSubmit}
            >
              Create Task
            </button>
            <button
              className="px-5 py-2 rounded bg-button bg-opacity-50 text-white"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex gap-2 flex-wrap items-center ">
            <button 
              className="px-5 py-2 rounded bg-red-600 text-white"
              onClick={handleDelete}>
              Delete Task
            </button>
            <button 
              className="px-5 py-2 rounded bg-button text-white"
              onClick={handleUpdate}>
              Update Task
            </button>
            <button
              className="px-5 py-2 rounded bg-button bg-opacity-50 text-white"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
