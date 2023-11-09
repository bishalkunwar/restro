
import spoon from "../constants/images/spoon.png"

export default function SubHeading({title}){

    return(
        <div style={{marginBottom: "1rem"}}>
            <p className="p__cormorant">{title}</p>
            <img src={spoon} alt="spoon" className="spoon_img"/>
        </div>
    );
};