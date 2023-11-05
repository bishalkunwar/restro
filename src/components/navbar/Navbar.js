import {HamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import "./Navbar.css";

export default function Navbar(){
    return(
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={MdOutlineRestaurantMenu} alt="logo imgs"/>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home"></a>Home</li>
                <li className="p__opensans"><a href="#about"></a>About</li>
                <li className="p__opensans"><a href="#menu"></a>Menu</li>
                <li className="p__opensans"><a href="#contact"></a>Contact</li>
                <li className="p__opensans"><a href="#awards"></a>Awards</li>
            </ul>
        </nav>
    );
};