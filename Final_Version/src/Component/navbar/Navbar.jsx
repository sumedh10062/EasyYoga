import React, { useContext } from "react";
import navbar from "./navbar.css";
import { faBed, faHeartPulse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Navbar = (props) => {
    
    const { user, dispatch } = useContext(AuthContext);
    const navigate = Navigate;
    console.log(user);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        console.log("User logged out");
        if (props.loc === "customerHomePage") {
            navigate("/");
        }
    }
    return (
          (<div className="navbar">
          <div className="navContainer">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <span className="logo">
                <h1>
                  {" "}
                  <FontAwesomeIcon icon={faHeartPulse} /> Easy Yoga
                </h1>
              </span>
            </Link>
                  {user ? (
                      <span>
                          <FontAwesomeIcon icon={faUser} />
                          <Link to="/customer" style={{ color: "inherit", textDecoration: "none" }}>
                              {user.name}
                              </Link>
                              <button className="navButton" onClick={handleLogout}>Log Out</button>
                           
                      
                      </span>
            ) : (
                          <div className="navItems">
                              <Link to="/register">
                              <button className="navButton">Register</button>
                              </Link>
                
                <Link to="/login">
                            <button className="navButton">Login</button>
                </Link>
              </div>
            )}
          </div>
        </div>) 
      
    
  );
};
export default Navbar;
