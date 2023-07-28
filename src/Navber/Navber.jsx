import { Link } from "react-router-dom";

const Navber = () => {
    return (
        <ul className="list">
            <div className="flex justify-between bg-cyan-950 text-white p-3">
                <div className="">
                 juyel
                </div>
                <div className="flex gap-10">
                    <li><Link>Home</Link> </li>
                    <li><Link to='/about'>About </Link> </li>
                    <li><Link to='/project'>Project</Link> </li>
                    <li><Link to='/contact'>Contact Me</Link> </li>
                </div>
            </div>
        </ul>
    );
};

export default Navber;