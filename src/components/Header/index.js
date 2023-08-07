import React from "react";
import "./header.css"
import bgImage from '../../assets/logozm.png';

const index = () => {
    return (
        <div className="headerMain">
            <div className="headerContent">
                <img className="zmLogo" src={bgImage} alt="logo"/>
                <h1>Discover the best food & drinks in your area</h1>
                <div className="searchContainer">
                    <div className="locationInput">
                        <input
                            className="locationInputBox"
                            placeholder="Location"
                        />
                    </div>
                    <p className="pipe">|</p>
                    <div className="searchInput">
                        <input
                            className="searchInputBox"
                            placeholder="Search for restraunt, cusine or a dish"
                        />

                    </div>
                </div>
            </div>

        </div>
    );
}

export default index;
// 829:420