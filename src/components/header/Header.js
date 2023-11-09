
import "./Header.css";
import SubHeading from "../subHeading/SubHeading";

export default function Header(){

    return(
        <div className="app__header app__wrapper section_padding" id="home">
            <div className="app__header_info">
                <SubHeading className="app__header-sh" title="Chase the Nepalese Taste"/>
                <h1 className="app__header-h1">
                    The fine refined Nepalese Cuisine.
                </h1>
            </div>
            
            <div className="app__wrapper_img">

            </div>
        </div>
    );
};