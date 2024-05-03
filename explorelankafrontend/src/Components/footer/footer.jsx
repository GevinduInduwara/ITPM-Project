import React from "react";
import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer=()=> {
        return (
            <div className="footer">
                <div className="sb_footer section_padding">
                    <div className="sb_footer-links">
                        <div className="sb_footer-links-div">
                            <h4>Resources</h4>
                            <a href="/">
                                <p>Home</p>
                            </a>
                            <a href="/customer_menu">
                                <p>Packages</p>
                            </a>
                            <a href="/aboutUs">
                                <p>Offers</p>
                            </a>
                            <a href="/event">
                                <p>Day Tours</p>
                            </a>
                            <a href="/cus_feedback_add">
                                <p>More</p>
                            </a>
                        </div>
                        <div className="sb_footer-links-div">
                            <h4>Contact Us</h4>
                            <p>Tel: 011-2345678</p>
                        </div>
                        <div className="sb_footer-links-div">
                            <h4>Coming soon on</h4>
                            <div className="social-names">
                                <a href="https://www.facebook.com/" className="links"><FacebookOutlinedIcon /></a>
                                <a href="https://www.instagram.com/" className="links"><InstagramIcon /></a>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="sb_footer-below">
                        <div className="sb_footer-copyright">
                            <p>
                                &copy;{new Date().getFullYear()} Explore Lanka. All rights reserved.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
}


export default Footer;