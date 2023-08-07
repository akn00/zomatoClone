import React, { useState } from "react";
import mobileDisplay from "../../assets/zomatoMobileDisplay.avif"
import InputFeild from "./InputField"
import appStoreButton from "../../assets/appleStoreButton.webp"
import playStoreButton from "../../assets/playStoreButton.webp"
import "./GetApp.css";
const Index = () => {

    const [selectedOption, setSelectedOption] = useState("Email");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

    return ( 
    <div className="getApp">
        <div className="mobileDisplay">
            <img src={mobileDisplay}/>
        </div>
        <div className="sideForm">
            <h2>Get the Zomato app</h2>
            <p>We will send you a link, open it on your phone to download the app</p>
            <div className="Radio">
                {/* two radio buttons woth toggle  */}
                {/* first radio will have name as Email and second will have the name as Phone */}

                <label>
            <input
              type="radio"
              value="Email"
              checked={selectedOption === "Email"}
              onChange={handleOptionChange}
            />
            Email
          </label>
          <label>
            <input
              type="radio"
              value="Phone"
              checked={selectedOption === "Phone"}
              onChange={handleOptionChange}
            />
            Phone
          </label>
            </div>
            <div className="Input">
            <InputFeild field={selectedOption}/>
            </div>

            <div className="storesButtons">
                <img src={playStoreButton} alt="playStore Button"/>
                <img src={appStoreButton} alt="appStore Button"/>

            </div>
        </div>
        
    </div> 
    );
}
 
export default Index;