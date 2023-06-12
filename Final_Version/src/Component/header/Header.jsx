import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseMedicalCircleXmark, faCab, faCalendar, faCalendarDays, faL, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { Calendar, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React, { useContext } from "react";
import { format } from "date-fns";
import "./header.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Header=({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });
    const handleOption = (name,operation) => {
        setOptions(prev=>{return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
              
        }})
    };

    const navigate = useNavigate()

    const handleSearch = () => {
        navigate("/centres", {state: {destination,date,options}});
    }

    const { user } = useContext(AuthContext);

    console.log("user", user);

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faHouseMedicalCircleXmark} />
                <span>Yoga</span>
                </div>
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faHouseMedicalCircleXmark} />
                <span>Meditation</span>
                </div>
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faHouseMedicalCircleXmark} />
                <span>Ayurveda</span>
                </div>
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faHouseMedicalCircleXmark} />
                <span>Homeopathy</span>
                </div>
            
            </div>
            {
                type !== "list" &&
                <><h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
            <p className="headerDesc">Get rewarded for your Yoga - unlock instant saving of 10% or 
            more with a free Easy Yoga account</p>
            {!(user) && <button className="headerBtn">Sign in / Register</button>}
                        
            <div className="headerSearch">
            <div className="headerSearchInput">
                <FontAwesomeIcon icon={faHouseMedicalCircleXmark} className="headerIcon"></FontAwesomeIcon>
                <input type="text" placeholder="Centre City" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}></input>
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => {
                    console.log("Clicked on cal : "+openDate)
                    setOpenDate(prevState => !prevState)
                    }}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
            
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"></FontAwesomeIcon>
                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} `}</span>
                
                { openOptions && <div className="options">
                    <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                    </div>
                </div>
                
                </div>}
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn1" onClick={handleSearch}>Search</button>
            </div>
            </div></>}
        </div>
        </div>
    )
}
export default Header