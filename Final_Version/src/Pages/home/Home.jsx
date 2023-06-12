import React from "react";
import Header from "../../Component/header/Header";
import Navbar from "../../Component/navbar/Navbar";
import Featured from "../../Component/featured/Featured";
import './home.css'
import YogaList from "../../Component/yogaList/YogaList";
import FeaturedProperties from "../../Component/featuredProperties/FeaturedProperties";
import MailList from "../../Component/mailList/MailList";
import Footer from "../../Component/footer/Footer";
import Slider from "../../Component/slider/Slider";
const Home=() => {
    return (
        <div>
           
                <Slider></Slider>
            <div>
                <Navbar></Navbar>
                <Header></Header>
                <div className="homeContainer">
                   <Featured/>
                   <h1 className="homeTitle">Browse by your type</h1>
                <YogaList></YogaList>
                    
                <FeaturedProperties></FeaturedProperties>
                <MailList></MailList>
                <Footer></Footer>
                </div>
                
            </div>
        </div>
    )
}
export default Home