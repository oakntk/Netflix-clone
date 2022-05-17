import React, { useEffect, useState } from 'react'
import "./Nav.css"

const Nav = () => {
    const [show, handleShow] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {
    //             handleShow(true);
    //         } else handleShow(false);
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    // }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className='nav_logo'
                src="./image/Netflix-Logo.png"
                alt="Netflix-Logo"
            />
            <img
                className='nav_avatar'
                src="./image/Netflix-User.jpg"
                alt="Netflix-Logo"
            />
        </div>
    )
}

export default Nav