import "./searchItem.css"
import { Link } from "react-router-dom";
const SearchItem = (props) => {
    const yoga = props.yoga;                                                                                  
    const rating = (Math.random() * (5 - 4) + 4).toFixed(1);
    const staticImage = "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return (
        <div className="searchItem">
            <img src={yoga.imageUrls[0] || staticImage} className="siImg" alt="preview Not Available" height={150} width={150} />
            <div className="siDesc">
                <h1 className="siTitle"> { yoga.name }</h1>
                <span className="siDastance">{ yoga.address.street }, {yoga.address.city }, {yoga.address.state }</span>
              <span className="siTaxiOp">Free airport taxi</span>
              
            <span className="siFeatures">
                {yoga.features} 
           </span>  
           <span className="siCancelOp">Free cancellation of Training</span>
           <span className="siCancelOpSubtitle">
            You can Cancel lateer, so lock in this great price today!
           </span>
            </div> 
            <div className="siDetails">
                <div className="siRating">
                    
                    
                    <span> Excellent </span>
                    <button>{ rating }</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice">₹ { yoga.pricePerNight}</span>
                    <span className="siTaxOp">Includes taxes and fees  </span>
                    <Link to={`/centers/` + yoga.id}>
                        <button className="siCheckButton">See availability</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default SearchItem