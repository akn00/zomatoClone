import React from "react"
import "./Footer.css"
import zmLogo from "../../assets/zmLogoBlack.avif"
import "@fortawesome/fontawesome-free/css/all.min.css";

const Inedx = () => {
    return ( <>
    <div className="Footer">
        <div className='adj'>
            <div className="logoFooter">
                <img src={zmLogo} alt="zomato logo"/>
            </div>

            <div className="buttonHeaderTop">
            <div>
                <button className="fButton" >India</button>
            </div>
            <div className="Space">

            </div>
            <div>
                <button className="fButton" ><i className="fa-globe"></i>English</button>
            </div>
        </div>
        </div>

        <div className="footerData">
            <div className="exp">
                <h3>ABOUT ZOMATO</h3>
                <h5>Who We Are</h5>
                <h5>Blog</h5>
                <h5>Work With Us</h5>
                <h5>Investor Relations</h5>
                <h5>Report Fraud</h5>
                <h5>Contact Us</h5>
            </div>
            <div className="exp">
                <h3>ZOMATO VERSE</h3>
                <h5>Zomato</h5>
                <h5>Blinkit</h5>
                <h5>Feeding India</h5>
                <h5>Hyperpure</h5>
                <h5>Zomaland</h5>

            </div>
            <div className="exp">
                <h3>FOR RESTRAUNTS</h3>
                <h5>Partner With Us</h5>
                <h5>Apps For You</h5>

            </div>
            <div className="exp">
                <h3>LEARN MORE</h3>
                <h5>Privacy</h5>
                <h5>Security</h5>
                <h5>Terms</h5>
                <h5>Sitemap</h5>

            </div>
            <div className="exp">
                <h3>SOCIAL LINKS</h3>

            </div>

        </div>
    </div>
    
    </> 
    );
}
 
export default Inedx;