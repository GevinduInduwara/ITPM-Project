import React from "react";
import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> Home</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> Packages</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> Offers</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> Day Tours</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> Feedback</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> E-mail : explorelanka@gmail.com</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i>Phone : 0112 586 1234 </a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> Reviews</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> Whatsapp : 070 3456545</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> Expert Team</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> Home</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> About</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> FAQ</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> Get Started</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i> Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                        <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item"><a href="#"><FacebookOutlinedIcon /></a></li>
                            <li className="list-inline-item"><a href="#"><InstagramIcon /></a></li>
                        </ul>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p className="h6">2021 ? All right Reversed. <a className="text-green ml-2" href="#" target="_blank">JavaTpoint</a></p>
                    </div>
                    <hr />
                </div>
            </div>
        </section>
    )
}

export default Footer;
