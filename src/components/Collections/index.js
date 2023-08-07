import "./Collections.css"
import React from "react";
import CollectionCard1Path from "../../assets/collection1.avif"
import CollectionCard2Path from "../../assets/collection2.avif"
import CollectionCard3Path from "../../assets/collection3.avif"
import CollectionCard4Path from "../../assets/collection4.avif"
import CollectionCard from "./CollectionCard";


const index = () => {
    return (  
        <div className="collections">
            <div className="colllectionsHeading">
                <h1>Collections</h1>
                <h3>Explore curated lists of top restaurants, cafes, pubs, and bars in Chandigarh, based on trends</h3>
            </div>
            <div className="Cards"> 
                <CollectionCard path={CollectionCard1Path} text1="8 Best Insta-worthy Places" text2="8 Places"/>
                <CollectionCard path={CollectionCard2Path} text1="Winners of Zomato Restaurant Awards" text2="10 Places"/>
                <CollectionCard path={CollectionCard3Path} text1="8 Newly Opened Restaurants" text2="8 Places"/>
                <CollectionCard path={CollectionCard4Path} text1="9 Best Bars & Pubs" text2="9 Places"/>
            </div>
        </div>
    );
}
 
export default index;