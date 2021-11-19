import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
    render() {
        const navStyle = {
            color:'#fff',
            textDecoration:'none'
        };
        return (
            <nav className="navbar" id="/navbar">   
            <Link to="/" style={navStyle}> 
               <img src="https://i.postimg.cc/wjY0ddQF/dit-logo.png" alt="logo" className="logo"/>
               </Link>
               <ul className="navLinks">
                   <Link to="about" style={navStyle}>
                   <li> About </li>
                   </Link>
                   <Link to="articles" style={navStyle}>
                   <li> Articles </li>
                   </Link>
                   <Link to="contact" style={navStyle}>
                   <li> Contact </li>
                   </Link>
                   <Link to="dictionary" style={navStyle}>
                   <li> Dictionary </li>
                   </Link>
               </ul>
            </nav>
        );
    }
}

export default NavBar;