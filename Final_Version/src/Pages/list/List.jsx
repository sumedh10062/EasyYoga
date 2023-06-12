import "./list.css"
import Header from '../../Component/header/Header';
import Navbar from '../../Component/navbar/Navbar';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Component/searchItem/SearchItem";
import usePostFetch from "../../hooks/usePostFetch";

const List=() => {
    const location = useLocation()
    console.log(location)

    const [destination,setDestination] = useState(location.state.destination)
    const [date,setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options,setOptions] = useState(location.state.options);

    const { data, loading, reFetch } = usePostFetch("/properties/filter",
        {
            "startDate": date[0].startDate,
            "endDate": date[0].endDate,
            "destination": destination,
            "maxPeople" : options.adult + options.children + 0
        }
    );

    const listSearchBtnHandler = () => {
        
        reFetch({
            "startDate": date[0].startDate,
            "endDate": date[0].endDate,
            "destination": destination,
            "maxPeople": options.adult + options.children + 0
        });
    }

    // console.log(data);
    return (
        <div>
             <Navbar/>
        <Header type="list"/>
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                <h1 className="lsTitle">Search</h1> 
                <div className="lsItem">
                    <label>Destination</label>
                            <input type="text" placeholder={destination}
                            onChange={(e)=>{setDestination(e.target.value)}}></input>
                </div> 
                <div className="lsItem">
                    <label>Check-in Date</label>
                    <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (<DateRange
                onChange={item=> setDate([item.selection])}
                minDate={new Date()}
                ranges={date}/>)}
                </div> 
                <div className="lsItem">
                    <label>Options</label>
                    <div className="lsOptions">
                    {/* <div className="lsOptionItem">
                        <span className="lsOptionText">Min price 
                        <small> per night</small></span>
                        <input type="number
                        " className="lsoptionInput" />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">Max price 
                        <small> per night</small></span>
                        <input type="number"
                         className="lsoptionInput" />
                    </div> */}
                    <div className="lsOptionItem">
                        <span className="lsOptionText">Adult 
                        </span>
                        <input type="number"
                         className="lsoptionInput" min={1} placeholder={options.adult} />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">Children 
                        </span>
                        <input type="number"
                         className="lsoptionInput" min={0} placeholder={options.children} />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">Room
                        </span>
                        <input type="number"
                        className="lsoptionInput" min={1} placeholder={options.room}/>
                    </div>
                    </div>
                </div>  
                        <button className="listSearchBtn" onClick={ listSearchBtnHandler}>Search</button>       
                    </div>
                    
                {
                    loading ? ("Loading property data")  
                    :         
                
                <div className="listResult">
                    {
                                data.map((yoga) => {
                                    return <SearchItem yoga={ yoga } />
                                })    
                    }
                    
                </div>
                }
            </div>
        </div>
        </div>
    )
}
export default List