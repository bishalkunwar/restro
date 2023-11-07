import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import "./Navbar.css";

export default function Navbar(){
    const[toggle, setToggle] = useState(false);
    
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
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">LogIn/Register</a> 
                <div/>
                <a href="/" className="p__opensans">Book Table</a>   
            </div>
            {toggle && (
                <div className="app__navbar-smallscreen">
                    <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>{setToggle(true)}}/>
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>{setToggle(false)}}/>
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__opensans"><a href="#home"></a>Home</li>
                            <li className="p__opensans"><a href="#about"></a>About</li>
                            <li className="p__opensans"><a href="#menu"></a>Menu</li>
                            <li className="p__opensans"><a href="#contact"></a>Contact</li>
                            <li className="p__opensans"><a href="#awards"></a>Awards</li>
                        </ul>
                    </div>
                </div>
            )}

        </nav>
    );
};