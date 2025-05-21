import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black text-black dark:text-white p-4">
            <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-700">
                <div className="w-full md:w-2/5">
                    <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
                    <p className="mt-6 text-sm leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </p>
                    <div className="flex gap-4 mt-6 text-xl">
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

                <div className="w-full md:w-1/5">
                    <h2 className="font-semibold text-black mb-5">Company</h2>
                    <ul className="text-sm space-y-2">
                        <li><a className="hover:underline" href="#">Home</a></li>
                        <li><a className="hover:underline" href="#">About us</a></li>
                        <li><a className="hover:underline" href="#">Contact us</a></li>
                        <li><a className="hover:underline" href="#">Privacy policy</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/5">
                    <h2 className="font-semibold text-black mb-5">Get in touch</h2>
                    <div className="text-sm space-y-2">
                        <p>+1-234-567-890</p>
                        <p>contact@QuickCart.dev</p>
                    </div>
                </div>
            </div>

            <p className="py-4 text-center text-xs md:text-sm text-gray-500">
                © quickcart.dev — All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
