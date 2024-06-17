import './footer.scss';
import { Link } from 'react-router-dom'


import { IoPhonePortrait } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiBoatFill } from "react-icons/pi";
import { FaSailboat } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="wrapper">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/logo.webp" alt="Fairhaven Yachts Logo" />
                    </div>

                    <div className="footer-location">
                        <div className="laConner-office textSPlayfair ">
                            <div className='bold'>
                                La Conner Office
                            </div>
                            <a href="https://maps.app.goo.gl/e25YNJMbJQ2vSAE37" target="_blank">
                                PO Box 1531
                                105 N First Street <br />
                                La Conner, WA 98257
                                USA
                            </a>
                        </div>


                        <div className="kirkland-office textSPlayfair">
                            <div className='bold'>
                                 Kirkland Office 
                            </div>
                            <a href='https://maps.app.goo.gl/vj46h3ipCPtXrvU47' target="_blank">
                                5400 Carillon Point <br />
                                Kirkland, WA 98033 USA
                            </a>
                        </div>


                    </div>

                    <div className="footer-contact">
                        <div className='textSPlayfair bold'>
                            CONTACT DETAILS
                        </div>
                        <h5>
                            <IoPhonePortrait className='footer-icons' /> &nbsp;: &nbsp; <a href="tel:1-206-940-9088">+1-206-940-9088</a>
                        </h5>
                        <h5>
                            <FaFax className='footer-icons' /> &nbsp;: &nbsp; <a href="tel:1-206-260-2726">+1-206-260-2726</a>
                        </h5>
                        <h5>
                            <MdEmail className='footer-icons' /> &nbsp;:&nbsp;  <a href="mailto:fairhavenyachtsales@gmail.com">fairhavenyachtsales@gmail.com</a>
                        </h5>


                    </div>

                    <div className="footer-buysell">
                        <div className='textSPlayfair bold'>
                            BUY & SELL
                        </div>
                        <Link to='buy'><h5><FaSailboat className='footer-icons' />&nbsp; Yachts For Sale</h5></Link>
                        <Link to='sell'><h5><PiBoatFill className='footer-icons' />&nbsp; Sell Your Yacht</h5></Link>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className='textSPlayfair'>©{new Date().getFullYear()} FAIRHAVEN YACHT SALES. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer