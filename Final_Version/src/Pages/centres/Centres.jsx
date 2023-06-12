import "./centres.css"
import Header from '../../Component/header/Header';
import Navbar from '../../Component/navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import image1 from "./yoga1.jpg";

const Centres=() => {
    const photos = [image1];
    return (
        <div>
            <Navbar/>
            <Header type="list"></Header>
            <div className="yogaContainer">
                <div className="yogaWrapper">
                    <button className="bookNow">Reserve or book now</button>
                    <h1 className="yogaTitle">Yoga Centre</h1>
                    <div className="yogaAddress">
                        <FontAwesomeIcon icon={faLocationDot }/>
                        <span>3 Km From railway station</span>
                    </div>
                    <span className="yogaDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="yogaPriceHighlight">
                        Book now and get 10% off
                    </span>
                    <div className="yogaImages">
                         {photos.map(photo=>(
                            <div className="yogaWrapper">
                                <img src={photo} alt="Preview not available" className="hotelImg" />
                            </div>
                         ))}
                    </div>
                    <div className="yogaDetails">
                        <div className="yogaDetailsText">
                            <h1 className="yogaTitle">Weekdays 1 hour training</h1>
                            <p>Our team is committed to extra thoughtful care and is passionate about delivering an amazing training experience. While each of our team members at yoga centres Group plays a unique role.

                            At Yoga Group we strive to be the first choice in the mind of guests, owners and talent. In our journey to achieve this, we practice strong beliefs and actions that respect the diversity of people, the community, ethics and the planet.</p>
                        </div>
                        <div className="yogaDetailsPrice">
                            <h1>Perfect for 1 month deal!</h1>
                            <span>
                                Located in the real heart of Nagpur, this Centre has an
                                excellent location score of 9.8!
                             </span>
                            <h2>
                                <b>Rs. 1500</b>
                            </h2>
                            <button>Reserve or book now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Centres