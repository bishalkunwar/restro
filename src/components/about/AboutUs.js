
import "./AboutUs.css";
import Images from "../constants/Images";

export default function AboutUs(){

    return(
        <div className="app__aboutus app__bg flex__center section_padding" id="about">
           <div className="app__aboutus-overlay flex__center">
                <img src={Images.G} alt="g-letter"/>
           </div>
           <div className="app__aboutus-content flex__center ">
                <div className="app__aboutus-content_about">
                    <h1 className="headtext__cormorant">About us</h1>
                    <img src={Images.spoon} alt="spoon" className="spoon__img"/>
                    <p className="p__opensans">Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom Lorem Ipsom</p>
                    <button type="button" className="custom_button">Know More</button>

                </div>
           </div>
        </div>
    );
};