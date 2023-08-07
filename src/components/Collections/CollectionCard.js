import React from "react";
import "./CollectionCard.css";


const CollectionCard = ({path,text1,text2}) => {
    return (  
        <div className="CollectionCard">
            <div className="collectionImg">
                <img src={path} alt={text1}/>
            </div>
            <div className="collectionText">
                <p>{text1}</p>
                <h6>{text2}</h6>
            </div>
        </div>
    );
}
 

export default CollectionCard;