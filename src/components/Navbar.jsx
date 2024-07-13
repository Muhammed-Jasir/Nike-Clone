import React from "react";
import headerLogo from "./../assets/images/header-logo.svg";
import hamburgerIcon from "./../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
const Navbar = () => {
    return (
        <header className="sm:px-16 px-8 py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </a>
                <ul className="flex flex-1 gap-16 max-lg:hidden justify-center">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburgerIcon} width={25} height={25} />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
