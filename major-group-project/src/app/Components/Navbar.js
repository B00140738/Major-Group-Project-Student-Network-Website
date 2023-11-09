//Import React and Hooks, along with react icons
import React, { useRef, useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

//In React, all HTML Items/Website items are represented/created using a JavaScript function with a return statement. The function must return the HTML elements.
function Navbar() {

    //navRef = the reference of the navbar itself
    const navRef = useRef();

    //Hook (useState). Contains variable (isOpen) and Updater (setIsOpen). All hooks need to be declared in the format [variable, updater] = hook(State)...
    const [isOpen, setIsOpen] = useState(false);

    //Show Navbar when button is clicked on smaller devices
    const showNavBar = () => {
        setIsOpen(!isOpen);
      }

    //Return Navbar Contents
    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef} className={`responsive-nav ${isOpen ? "open" : ""}`}>
                <a href='/#'>Home</a>
                <a href='/#'>About Us</a>
                <a href='/#'>Contact</a>
                <a href='/#'>Settings</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;