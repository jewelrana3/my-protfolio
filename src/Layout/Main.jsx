import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet/>
        </div>
    );
};

export default Main;