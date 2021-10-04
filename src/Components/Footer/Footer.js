import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-basic">
            <div className="social">
                <Link to="#"><i class="icon ion-social-instagram"></i></Link><Link to="#"><i class="icon ion-social-twitter"></i></Link><Link to="#"><i class="icon ion-social-facebook"></i></Link></div>
            <ul class="list-inline">
                <li class="list-inline-item"><Link to="/home">Home</Link></li>
                <li class="list-inline-item"><Link to="/service">Service</Link></li>
                <li class="list-inline-item"><Link to="about">About</Link></li>
                <li class="list-inline-item"><Link to="#">Terms</Link></li>
                <li class="list-inline-item"><Link to="#">Privacy Policy</Link></li>
            </ul>
            <p class="copyright">Study Point © 2021</p>
            </div>
    );
};

export default Footer;