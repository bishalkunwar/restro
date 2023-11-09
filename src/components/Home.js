import Navbar from "./navbar/Navbar"
import Header from "./header/Header";
import AboutUs from "./about/AboutUs";

export default function Home(){
    return(
        <div>
            <Navbar/>
            <Header/>
            <AboutUs/>
        </div>
    )
}