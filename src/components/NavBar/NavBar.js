import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaBars} from 'react-icons/fa';


const NavBar = ({toggle}) => {
    const navStyle = {
        color:'#25CCF7',
        textDecoration:'none',
    };


        return(
            <nav className="navbar" id="/navbar">   
            <Link to="/" style={navStyle}> 
               <img src="https://i.postimg.cc/bJBQG6Dy/dit-logo2.png" alt="logo" className="logo"/>
               </Link>
               <ul className="navLinks">
               <Link to="/" style={navStyle}>
                   <li className="link"> Home </li>
                   </Link>
                   <Link to="/about" style={navStyle}>
                   <li className="link"> About </li>
                   </Link>
                   <Link to="/contact" style={navStyle}>
                   <li className="link"> Contact </li>
                   </Link>
                   <Link to="/dictionary" style={navStyle}>
                   <li className="link"> Dictionary </li>
                   </Link>
               </ul>
               <FaBars className="faBars" onClick={toggle}/>
            </nav>
        );
}

export default NavBar;