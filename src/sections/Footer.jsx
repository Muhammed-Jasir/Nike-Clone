import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img
                            src={footerLogo}
                            alt="footerlogo"
                            width={150}
                            height={46}
                        />
                    </a>
                    <p className="mt-6 text-base leading-7 text-white-400 font-montserrat sm:max-w-sm">
                        Get shoes ready for the new term at your nearest Nike
                        store. Find your perfect Size In store. Get Rewards.
                    </p>
                    <div className="flex items-center gap-5 mt-8">
                        {socialMedia.map((icon, index) => (
                            <div
                                className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer"
                                key={index}
                            >
                                <img
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between flex-1 flex-wrap lg:gap-10 gap-20 mt-8 ">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link, index) => (
                                    <li
                                        className="text-white-400 mt-3 font-montserrat leading-normal hover:underline cursor-pointer hover:underline-offset-8"
                                        key={link.name}
                                    >
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer gap-2">
                    <img
                        src={copyrightSign}
                        alt="copyright"
                        width={20}
                        height={20}
                        className="rounded-full m-0"
                    />
                    <p>Copyright. All rights are reserved.</p>
                </div>
                <p className="font-montserrat cursor-pointer hover:underline hover:underline-offset-8">
                    Terms and Conditions
                </p>
            </div>
        </footer>
    );
};

export default Footer;
