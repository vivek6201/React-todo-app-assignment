import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import CardContainer from "./CardContainer";

const Hompage = () => {

  const todos = useSelector(state => state.todo.todo);
  const status = ["to do","in progress", "task done"]
  
  return (
    <div className="p-10 w-full h-full overflow-y-scroll ">
      <div className="flex w-full flex-col md:flex-row h-[5rem] justify-start gap-x-8 items-center">
        <img src={logo} alt="" className="w-[7rem] md:w-[10rem]"/>
        <div className="w-[2px] bg-black h-[80%] hidden md:block"></div>
        <h1 className="font-semibold md:font-bold text-lg md:text-2xl text-center">Web Development Tracker</h1>
      </div>
      <div className="w-full h-[500px] mt-20 items-center md:items-start md:justify-center flex gap-x-5 flex-wrap">
        {
          status.map((el) =>{
            return <CardContainer el={el} todos={todos} key={el}/>
          })
        }
      </div>
    </div>
  );
};

export default Hompage;
