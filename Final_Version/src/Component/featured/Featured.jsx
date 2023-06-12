import { Link, useNavigate } from "react-router-dom"
import "./featured.css"
import myimage1 from "./featured.jpg"
import mumbai from "./mumbai.jpeg"
import nagpur from "./nagpur.jpg"

const Featured = () => {
    const today = new Date();
    const navigate = useNavigate();
    const goToList = (city) => {
        navigate("/centres", {state: {destination:city, date:[{
            "startDate": today,
            "endDate": today
        }], options : {adult : 1,} }});
        
    }
    return(
        <div className="featured">
            
            <div className="featuredItem" onClick={()=>goToList("Pune")}>
               <img src={myimage1} alt="preview Not Available" className="featuredImg" height={150} width={150}/>
                <div className="featuredTitle">
                    <h1><br/>Pune</h1>
                    <h2>5 Centers</h2>
                </div>
                </div>
            <div className="featuredItem" onClick={()=>goToList("Nagpur")}>
               <img src={nagpur} alt="preview Not Available" className="featuredImg" height={150} width={150}/>
                <div className="featuredTitle">
                    <h1><br/>Nagpur</h1>
                    <h2>7 Centers</h2>
                </div>
            </div>
            <div className="featuredItem" onClick={()=>goToList("Mumbai")}>
               <img src={mumbai} alt="preview Not Available" className="featuredImg" height={150} width={150}/>
                <div className="featuredTitle">
                    <h1><br/>Mumbai</h1>
                    <h2>11 Centers</h2>
                </div>
            </div>
        </div>
    )
}
export default Featured;