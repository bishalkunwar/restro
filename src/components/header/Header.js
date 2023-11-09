
import "./Header.css";
import SubHeading from "../subHeading/SubHeading";
import Images from "../constants/Images";

export default function Header(){

    return(
        <div className="app__header app__wrapper section_padding" id="home">
            <div className="app__header_info">
                <SubHeading className="app__header-sh" title="Chase the Nepalese Taste"/>
                <h1 className="app__header-h1">
                    The fine refined Nepalese Cuisine.
                </h1>
                <p className="p__opensans" style={{margin: "2rem 0", color: "white"}}> yes this is the fine refined nepalese tatese resturants with the availability of all the foods and soft drinks. we do serve very well with the customer relation concern always into our head. Thank You</p>
                <button type="button" className="custom_button">Explore Menu</button>
            </div>
            
            <div className="app__wrapper_img">
                <img src={Images.welcome} alt="header img"/>
            </div>
        </div>
    );
};