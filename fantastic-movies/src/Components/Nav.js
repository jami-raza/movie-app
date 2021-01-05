import React,{useState, useEffect} from 'react'
import image1 from '../assets/netflix-logo.png'
import image2 from '../assets/netflix-icon.jpg'
import './Nav.css'
const Nav = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src={image1} className="nav_logo" alt="netflix1"/>
            <img src={image2} className="nav_icon" alt="netflix2"/>
        </div>
    )
}

export default Nav

