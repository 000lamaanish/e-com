import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="w-full md:w-2/5">
                    <Image className="footer-logo" src={assets.logo} alt="logo" />
                    <p className="footer-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </p>
                    <div className="footer-social-icons">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <div className="footer-column">
                    <h2 className="footer-heading">Company</h2>
                    <ul className="text-sm space-y-2">
                        <li><a className="footer-link" href="#">Home</a></li>
                        <li><a className="footer-link" href="#">About us</a></li>
                        <li><a className="footer-link" href="#">Contact us</a></li>
                        <li><a className="footer-link" href="#">Privacy policy</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h2 className="footer-heading">Get in touch</h2>
                    <div className="text-sm space-y-2">
                        <p>+1-234-567-890</p>
                        <p>contact@QuickCart.dev</p>
                    </div>
                </div>
            </div>

            <p className="footer-bottom">
                © quickcart.dev — All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
