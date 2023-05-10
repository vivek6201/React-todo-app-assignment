import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Hompage";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <div className="grid grid-cols-[70px_1fr] md:grid-cols-[100px_1fr] w-full h-full relative">
      <Sidebar />
      <div className="grid grid-rows-[5rem_1fr]">
        <Header />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
