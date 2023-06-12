import "./featuredProperties.css"
import yoga1 from "./yoga1.jpg";
import yoga2 from "./yoga2.jpg";
import yoga3 from "./yoga3.jpg";
import yoga4 from "./yoga4.jpg";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
            <img src={yoga1} className="fpImg" alt="preview Not Available" height={150} width={150} />
            <span className="fpName">Yoga Center<br/></span>
            <span className="fpCity">Nagpur<br/></span>
            <span className="fpPrice">Starting from ₹1500<br/></span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>

            <div className="fpItem">
            <img src={yoga2} className="fpImg" alt="preview Not Available" height={150} width={150} />
            <span className="fpName">Meditation Center <br/></span>
            <span className="fpCity">Pune <br/></span>
            <span className="fpPrice">Starting from ₹1000 <br/> </span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>

            <div className="fpItem">
            <img src={yoga3} className="fpImg" alt="preview Not Available" height={150} width={150} />
            <span className="fpName">Ayurveda Center <br/></span>
            <span className="fpCity">Nagpur <br/></span>
            <span className="fpPrice">Starting from ₹3000 <br/></span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>

            <div className="fpItem">
            <img src={yoga4} className="fpImg" alt="preview Not Available" height={150} width={150} />
            <span className="fpName">homoeopathy Center <br/></span>
            <span className="fpCity">Nagpur<br/></span>
            <span className="fpPrice">Starting from ₹4000<br/></span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>
        </div>

        
        
    )
}

export default FeaturedProperties