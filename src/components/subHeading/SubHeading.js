
import Images from "../constants/Images";

export default function SubHeading({title}){

    return(
        <div style={{marginBottom: "1rem"}}>
            <p className="p__cormorant">{title}</p>
            <img src={Images.spoon} alt="spoon" className="spoon_img"/>
        </div>
    );
};