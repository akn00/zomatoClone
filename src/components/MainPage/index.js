import React from "react";
import Header from "../Header";
import CardsBelow from "../CardsBelow"
import Collections from "../Collections"
import GetApp from "../GetApp"
import Footer from "../Footer"
import './MainPage.css'

const MainPage = () => {
    return ( <>
    <Header/>
    <div className="content">
    <CardsBelow/>
    <Collections/>
    <GetApp/>
    </div>
    <div className="zmFooter">
    <Footer/>
    </div>
    </> 
    );
}
 
export default MainPage;
